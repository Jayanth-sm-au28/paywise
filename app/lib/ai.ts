import { OpenAI } from 'openai';

export const askAI = async (query: string) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
  });

  const response = await openai.completions.create({
    prompt: `Based on this content: http://www.youtube.com/, answer the following: ${query}`,
    model: 'gpt-3.5-turbo', // Use a supported model
    max_tokens: 150,
  });

  return response.choices[0].text;
};
