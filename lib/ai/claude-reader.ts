import Anthropic from '@anthropic-ai/sdk';
import { parseJson } from './openai-compatible-reader';

/**
 * Claude reading of a quote/invoice sentence, used after the
 * OpenAI-compatible providers. Needs ANTHROPIC_API_KEY (or ANTHROPIC_AUTH_TOKEN); returns null on a
 * missing key, an error, a timeout or a refusal so the caller falls back to
 * the rule reader.
 */

const nullable = (type: string) => ({ type: [type, 'null'] });

/** Structured-output schema: every key present, null when not stated. */
const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: [
    'customerName', 'customerEmail', 'customerPhone', 'customerAddress', 'lineItems',
    'depositPercent', 'dueInDays', 'validForDays', 'notes', 'projectReference', 'scope', 'leadTime',
  ],
  properties: {
    customerName: nullable('string'),
    customerEmail: nullable('string'),
    customerPhone: nullable('string'),
    customerAddress: nullable('string'),
    lineItems: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['description', 'qty', 'unitPrice'],
        properties: { description: { type: 'string' }, qty: { type: 'number' }, unitPrice: { type: 'number' } },
      },
    },
    depositPercent: nullable('number'),
    dueInDays: nullable('number'),
    validForDays: nullable('number'),
    notes: nullable('string'),
    projectReference: nullable('string'),
    scope: nullable('string'),
    leadTime: nullable('string'),
  },
};

export async function readWithClaude(system: string, text: string): Promise<unknown | null> {
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) return null;
  try {
    const client = new Anthropic({ timeout: 30_000, maxRetries: 1 });
    const res = await client.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 4000,
      // A refused request is re-run on a fallback model chosen by the API.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
      system,
      messages: [{ role: 'user', content: text }],
    });
    if (res.stop_reason === 'refusal') return null;
    const block = res.content.find((b) => b.type === 'text');
    return block && block.type === 'text' ? parseJson(block.text) : null;
  } catch (err) {
    if (err instanceof Anthropic.APIError) console.error(`[documents/parse] claude failed: ${err.status} ${err.message}`);
    else console.error('[documents/parse] claude failed:', err instanceof Error ? err.message : err);
    return null;
  }
}
