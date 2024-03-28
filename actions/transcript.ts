"use server";

import {
  AzureKeyCredential,
  ChatRequestMessage,
  OpenAIClient,
} from "@azure/openai";

async function transcript(prevState: any, formData: FormData) {
  console.log("PREVIOUS STATE:", prevState);

  const file = formData.get("audio") as File;

  if (file.size === 0) {
    return {
      sender: "",
      response: "NO Audio",
    };
  }
  console.log(">>", file);

  const arrayBuffer = await file.arrayBuffer();
  const audio = new Uint8Array(arrayBuffer);
}

export default transcript;
