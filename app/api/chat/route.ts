import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'system',
          content: `You are a helpful AI assistant for Ashara Health & Wellness, a naturopathic medicine practice in Laguna Beach, CA. 
          
          You can help visitors with:
          - General information about naturopathic medicine, acupuncture, and holistic health
          - Questions about the services offered (IV therapy, hormone optimization, functional medicine, etc.)
          - Scheduling and appointment information
          - General wellness advice and health education
          
          Always be professional, compassionate, and informative. If asked about specific medical advice, remind users to consult with Dr. Ashara or schedule an appointment for personalized care. The practice is located at 32406 S Coast Hwy, Laguna Beach, CA and can be reached at (949) 464-4770 or hello@ashara.health.`,
        },
        ...messages,
      ],
    });

    // Convert the response to a compatible format
    const stream = OpenAIStream(response as any);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
