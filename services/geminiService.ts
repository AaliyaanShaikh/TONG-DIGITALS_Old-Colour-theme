
import { GoogleGenAI, Type } from "@google/genai";

export const analyzeBrand = async (businessDescription: string, industry: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this business and provide marketing advice. Industry: ${industry}. Description: ${businessDescription}.`,
      config: {
        systemInstruction: "You are a world-class CMO consultant. Provide structured, high-end marketing strategies.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategy: {
              type: Type.STRING,
              description: 'A high-level marketing strategy summary.'
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Three key actionable recommendations.'
            },
            targetAudience: {
              type: Type.STRING,
              description: 'The primary target demographic description.'
            }
          },
          required: ['strategy', 'recommendations', 'targetAudience']
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the Tong Digital AI Assistant. You are sophisticated, helpful, and professional. You help potential clients understand Tong Digital's services (Brand Identity, Digital Strategy, Performance Marketing, SEO, Data Analytics, PR) and offer high-level marketing advice. Keep responses concise and high-end.",
      },
      history: history
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Assistant Error:", error);
    return "I apologize, but I'm having trouble connecting right now. How else can I assist you with your marketing needs?";
  }
};
