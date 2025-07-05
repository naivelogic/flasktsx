import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { AzureOpenAI } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* 📝Activity 2 - Add Router for new API using the new serverBasic2.ts (exported version from Activity 1 - serverBasic.ts)
import basicRouter from './serverBasic2';
app.use(basicRouter);
*/
import basicRouter from './serverBasic2';
app.use(basicRouter);

import chatRouter from '../chat';
app.use(chatRouter);


/* Create /backend/.env */
/*
const endpoint = process.env.AZURE_OPENAI_ENDPOINT!;
const apiKey = process.env.AZURE_OPENAI_API_KEY!;
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT!;
const apiVersion = "2024-05-01-preview";

const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

const SYSTEM_MESSAGE = "You are a helpful assistant.";

app.post('/api/get-message', async (req, res) => {
  const { message, context } = req.body;

  // Build the message history
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
*/

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});