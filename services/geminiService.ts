
import { GoogleGenAI } from "@google/genai";
import { PHARMACY_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a helpful virtual assistant for ${PHARMACY_INFO.name} in ${PHARMACY_INFO.suburb}, Pretoria.
Strict Rules:
1. ONLY answer questions about opening hours, location, services (GP, Pharmacy, Clinic, Women's Health, Physio, Dental), and contact info.
2. NEVER provide medical advice, diagnosis, or treatment recommendations.
3. If asked about health issues, symptoms, or specific drugs, politely tell the user to book a consultation with our healthcare professionals.
4. Keep answers short, professional, and reassuring.
5. Location: ${PHARMACY_INFO.address}.
6. Hours: ${PHARMACY_INFO.openingHours.map(h => `${h.day}: ${h.time}`).join(', ')}.
7. WhatsApp: ${PHARMACY_INFO.phone}.
`;

export async function askAssistant(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.1,
        maxOutputTokens: 150
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please call us for assistance.";
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble connecting. Please call us at " + PHARMACY_INFO.phone;
  }
}

export function classifyUserEnquiry(details: string): string {
  const lower = details.toLowerCase();
  if (lower.includes('tooth') || lower.includes('dental') || lower.includes('braces')) return 'DENTAL_REQUEST';
  if (lower.includes('script') || lower.includes('medication') || lower.includes('pharmacy')) return 'PHARMACY_ENQUIRY';
  if (lower.includes('back') || lower.includes('physio') || lower.includes('joint')) return 'PHYSIO_REQUEST';
  if (lower.includes('pregnant') || lower.includes('abortion') || lower.includes('pap')) return 'WOMENS_HEALTH';
  return 'GENERAL_ENQUIRY';
}
