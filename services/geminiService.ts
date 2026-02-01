import { GoogleGenAI } from "@google/genai";
import { TripRequest } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateItinerary = async (request: TripRequest): Promise<string> => {
  try {
    const ai = getClient();
    
    const prompt = `
      Act as a world-class travel agent. Create a creative, exciting, and personalized ${request.duration} itinerary for a trip to ${request.destination}.
      
      The traveler has a ${request.budget} budget.
      Their interests include: ${request.interests.join(', ')}.
      
      Format the response using Markdown. 
      Use H3 (###) for Day headers.
      Use bullet points for activities.
      Add a "Pro Tip" for each day.
      Keep the tone inspiring and adventurous.
      Do not include intro filler, jump straight into the itinerary plan.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Fast response needed for UI
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No itinerary could be generated.");
    }
    return text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate itinerary. Please check your API key and try again.");
  }
};
