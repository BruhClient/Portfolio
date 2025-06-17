import { NextResponse } from "next/server";
import { CoreMessage, CoreSystemMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { getEmbedding } from "@/lib/openai";
import pinecone from "@/lib/pinecone";
import { SYSTEM_PROMPT } from "@/lib/prompts";
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const messagesTruncated: CoreMessage[] = messages.slice(-6);

    const embedding = await getEmbedding(
      messagesTruncated.map((message) => message.content).join("\n")
    );

    const index = pinecone.index(process.env.PINECONE_INDEX!);
    const vectorQueryResponse = await index.query({
      vector: embedding,
      topK: 10,
      includeMetadata: true,
    });

    const relevantData = vectorQueryResponse.matches.map(
      (data) => data.metadata!.text
    );

    const systemMessage: CoreSystemMessage = {
      role: "system",
      content:
        SYSTEM_PROMPT +
        "Here are some relevant html from the website :" +
        relevantData.map((data, index) => `${index} : ${data} \n\n`),
    };

    const response = streamText({
      model: openai("gpt-4o"),

      messages: [systemMessage, ...messagesTruncated],
    });

    return response.toDataStreamResponse();
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
