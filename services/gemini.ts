
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const analyzeHypothesis = async (content: string, userQuery: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `
      Context: You are an expert systems auditor and historian assisting with the "Mascarene Refuge Hypothesis" research.
      
      Current Section Content:
      ---
      ${content}
      ---
      
      User Question/Prompt: ${userQuery}
      
      Instructions:
      1. Be analytical, critical, and rigorous.
      2. Surface failure modes and weaknesses first.
      3. Adhere to the "Constraint-first modeling" principle.
      4. Use a professional, monospaced-style scholarly tone.
    `,
    config: {
      thinkingConfig: { thinkingBudget: 4000 }
    }
  });
  
  return response.text || "Unable to generate analysis at this time.";
};

export const synthesizeSection = async (sectionTitle: string, content: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `
      Synthesize the following section of the Mascarene Refuge Hypothesis: "${sectionTitle}".
      Provide a concise 2-3 sentence overview followed by 3 key critical questions for further validation.
      
      Content:
      ${content}
    `
  });
  
  return response.text || "Synthesis failed.";
};
