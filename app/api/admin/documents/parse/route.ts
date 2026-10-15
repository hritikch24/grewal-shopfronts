import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import {
  PARSE_PROMPT,
  groundDraft,
  mergeDrafts,
  missingRequired,
  ruleParse,
  type DocType,
} from '@/lib/document-parse';

/**
 * POST /api/admin/documents/parse  { text, type? }
 *
 * Reads one plain-English sentence into a quote/invoice draft. Creates
 * nothing: the admin page shows the draft, and the existing
 * POST /api/admin/documents saves it. The AI reading is checked against the
 * sentence (lib/document-parse.ts); without GROQ_API_KEY, or if the call
 * fails, the rule reading is used alone.
 */

function isAuthorized(request: NextRequest): boolean {
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey) return false;
  const [scheme, token] = (request.headers.get('authorization') ?? '').split(' ');
  return scheme === 'Bearer' && token === adminKey + 'nimda';
}

async function aiReading(text: string): Promise<unknown | null> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return null;
  try {
    const client = new OpenAI({ apiKey, baseURL: 'https://api.groq.com/openai/v1', timeout: 12_000, maxRetries: 1 });
    const res = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      temperature: 0,
      max_tokens: 600,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: PARSE_PROMPT },
        { role: 'user', content: text },
      ],
    });
    return JSON.parse(res.choices[0]?.message?.content ?? 'null');
  } catch (err) {
    console.error('[documents/parse] AI reading failed, using rules only:', err instanceof Error ? err.message : err);
    return null;
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

  let body: { text?: unknown; type?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }
  const text = typeof body.text === 'string' ? body.text.trim().slice(0, 2000) : '';
  if (text.length < 3) return NextResponse.json({ error: 'Type what the quote or invoice is for.' }, { status: 400 });
  const fallbackType: DocType = body.type === 'invoice' ? 'invoice' : 'quote';

  const rules = ruleParse(text, fallbackType);
  const ai = await aiReading(text);
  const draft = ai ? mergeDrafts(groundDraft(ai, text, fallbackType), rules) : rules;

  return NextResponse.json({ draft, missing: missingRequired(draft), engine: ai ? 'ai' : 'rules' });
}
