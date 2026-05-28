'use server';
/**
 * @fileOverview A Genkit flow for generating a personalized Brazilian National Team sticker from a user's photo.
 *
 * - personalizeStickerWithAI - A function that transforms a user's photo into a personalized football sticker.
 * - PersonalizeStickerWithAIInput - The input type for the personalizeStickerWithAI function.
 * - PersonalizeStickerWithAIOutput - The return type for the personalizeStickerWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeStickerWithAIInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A user's photo, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  userName: z.string().optional().describe('The name of the user to be included on the sticker.'),
});
export type PersonalizeStickerWithAIInput = z.infer<typeof PersonalizeStickerWithAIInputSchema>;

const PersonalizeStickerWithAIOutputSchema = z.object({
  stickerDataUri: z.string().describe('The generated personalized sticker image as a data URI.'),
});
export type PersonalizeStickerWithAIOutput = z.infer<typeof PersonalizeStickerWithAIOutputSchema>;

export async function personalizeStickerWithAI(input: PersonalizeStickerWithAIInput): Promise<PersonalizeStickerWithAIOutput> {
  return personalizeStickerWithAIFlow(input);
}

const personalizeStickerWithAIFlow = ai.defineFlow(
  {
    name: 'personalizeStickerWithAIFlow',
    inputSchema: PersonalizeStickerWithAIInputSchema,
    outputSchema: PersonalizeStickerWithAIOutputSchema,
  },
  async input => {
    const textPrompt = `Transforme esta pessoa em uma figurinha oficial da Seleção Brasileira de futebol. A figurinha deve ter as cores verde, amarelo e azul, e elementos como a bandeira do Brasil ou o escudo da CBF. Inclua o nome '${input.userName}' na figurinha se fornecido. O estilo deve ser de uma figurinha colecionável, pronta para ser colada em um álbum.`;

    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image',
      prompt: [
        {text: textPrompt},
        {media: {url: input.photoDataUri}},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate sticker image.');
    }

    return {stickerDataUri: media.url};
  }
);
