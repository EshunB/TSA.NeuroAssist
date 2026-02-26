export type TranslateParams = {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
};

export interface ITranslationProvider {
  readonly name: string;
  translate(params: TranslateParams): Promise<string>;
}

// Simple mock provider for demo mode.
const MOCK_DICTIONARY: Record<string, Record<string, string>> = {
  es: {
    hello: "hola",
    "thank you": "gracias",
    "good morning": "buenos días"
  },
  fr: {
    hello: "bonjour",
    "thank you": "merci",
    "good morning": "bonjour"
  }
};

export class MockTranslationProvider implements ITranslationProvider {
  readonly name = "Mock translator (demo)";

  async translate({ text, targetLanguage }: TranslateParams): Promise<string> {
    const lower = text.toLowerCase();
    const dict = MOCK_DICTIONARY[targetLanguage as keyof typeof MOCK_DICTIONARY];
    if (!dict) {
      return `[${targetLanguage}] ${text}`;
    }
    const direct = dict[lower];
    if (direct) return direct;
    return `[${targetLanguage}] ${text}`;
  }
}
