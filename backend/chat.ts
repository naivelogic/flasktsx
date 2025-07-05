import { Router } from 'express';
import { AzureOpenAI } from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const chatRouter = Router();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT!;
const apiKey = process.env.AZURE_OPENAI_API_KEY!;
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT!;
const apiVersion = "2024-05-01-preview";

const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

const SYSTEM_MESSAGE = "You are a helpful assistant.";

chatRouter.post('/api/get-message', async (req, res) => {
  const { message, context } = req.body;

  const messages = [
    { role: "system", content: SYSTEM_MESSAGE },
    ...(context || []),
    { role: "user", content: message }
  ];

  try {
    const result = await client.chat.completions.create({
      model: deployment,
      messages: messages,
      temperature: 0.7,
      max_tokens: 512,
    });
    const answer = result.choices[0]?.message?.content || "No response.";
    res.json({ resp: answer });
  } catch (error) {
    console.error(error);
    res.json({ resp: "Sorry, there was an error with the AI service." });
  }
});

export default chatRouter;
