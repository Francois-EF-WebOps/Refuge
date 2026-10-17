/**
 * AI analysis is disabled in this browser-only build.
 *
 * Do not restore direct browser calls to Gemini or inject API keys through
 * Vite's define option. Re-enable these actions only after a server-side
 * proxy authenticates requests, stores the credential server-side, and
 * applies rate limits and abuse controls.
 */
const DISABLED_MESSAGE =
  "AI analysis is currently disabled because this browser-only build has no secure server-side proxy. The rest of the repository remains available; do not add an API key to the client bundle.";

export const analyzeHypothesis = async (_content: string, _userQuery: string): Promise<string> => {
  return DISABLED_MESSAGE;
};

export const synthesizeSection = async (_sectionTitle: string, _content: string): Promise<string> => {
  return DISABLED_MESSAGE;
};
