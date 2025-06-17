import dotenv from "dotenv";
dotenv.config();

import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import { OpenAIEmbeddings } from "@langchain/openai";

import { PineconeStore } from "@langchain/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";

async function generateEmbeddings() {
  const loader = new DirectoryLoader(
    "components",
    {
      ".tsx": (path) => new TextLoader(path),
      ".ts": (path) => new TextLoader(path),
    },
    true
  );
  const docs = (await loader.load())
    .filter((doc) => !doc.metadata.source.includes("ui"))
    .map((doc): DocumentInterface => {
      const url = doc.metadata.source
        .replace(/\\/g, "/")
        .split("/components")[1];

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "")
        .replace(/ className=(["']).*?\1| className={.*?}/g, "")
        .replace(/^\s*[\r]/gm, "")
        .trim();
      return {
        pageContent: pageContentTrimmed,
        metadata: {
          url,
        },
      };
    });

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

  const splitDocs = await splitter.splitDocuments(docs);

  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
  });

  console.log(process.env.PINECONE_API_KEY!);

  const pinecone = new PineconeClient({
    apiKey: process.env.PINECONE_API_KEY!,
  });

  // Will automatically read the PINECONE_API_KEY and PINECONE_ENVIRONMENT env vars
  const namespace = "default"; // or any name you like
  const pineconeIndex = pinecone
    .Index(process.env.PINECONE_INDEX!)
    .namespace(namespace);

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    // Maximum number of batch requests to allow at once. Each batch is 1000 vectors.
    maxConcurrency: 5,
    // You can pass a namespace here too
    // namespace: "foo",
  });

  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
