import OpenAi from "openai";

export const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });

export async function getEmbedding(text: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  const embedding = response.data[0].embedding;

  if (!embedding) throw Error("Error generating embedding.");

  return embedding;
}
