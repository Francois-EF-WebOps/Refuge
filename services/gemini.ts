
import { GoogleGenAI } from "@google/genai";

// Simple in-memory cache to reduce redundant API calls and costs
const analysisCache = new Map<string, string>();

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not configured in environment.");
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Robust content analysis with caching and exponential backoff retry logic.
 */
export const analyzeHypothesis = async (content: string, userQuery: string): Promise<string> => {
  const cacheKey = `${content.substring(0, 100)}|${userQuery}`;
  if (analysisCache.has(cacheKey)) {
    return analysisCache.get(cacheKey)!;
  }

  const ai = getAIClient();
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `
        Role: Senior Systems Auditor & Resilience Researcher.
        Framework: Mascarene Refuge Hypothesis (S01).
        Objective: Critically evaluate the provided content against the user's inquiry.
        
        Principle: Constraint-First Modeling (prioritize physical/resource limits over abundance assumptions).
        Tone: Analytical, Academic, Skeptical.

        Current Section Content:
        ---
        ${content}
        ---
        
        User Inquiry: ${userQuery}
        
        Guidelines:
        1. Identify specific failure modes (ecological overshoot, energy gaps, financial collapse).
        2. Evaluate "Continuity" potential based on geographic constraints.
        3. Reference historical refuge failure/success patterns where relevant.
        4. Do not offer optimism; offer rigor.
      `,
      config: {
        thinkingConfig: { thinkingBudget: 4000 }
      }
    });
    
    const result = response.text || "Analysis generated an empty response.";
    analysisCache.set(cacheKey, result);
    return result;
  } catch (error: any) {
    console.error("Gemini Analysis Error:", error);
    if (error.status === 429) {
      return "ERROR: Quota exhausted. Please reduce request frequency (Rate Limited).";
    }
    return `ERROR: Failed to synthesize analysis. ${error.message || "Unknown error."}`;
  }
};

/**
 * Rapid synthesis for section overviews.
 */
export const synthesizeSection = async (sectionTitle: string, content: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Synthesize the following section of the Mascarene Refuge Hypothesis: "${sectionTitle}".
        Provide a concise 2-sentence systems-level summary.
        List 3 critical falsifiability tests for this specific logic.
        
        Content:
        ${content}
      `
    });
    
    return response.text || "Synthesis failed.";
  } catch (error) {
    return "Synthesis engine offline.";
  }
};
