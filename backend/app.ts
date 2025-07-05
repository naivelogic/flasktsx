import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

/* 📝Activity 1 - Create a echo api */
app.post('/api/chat-echo/get-message', (req, res) => {
  const { message, context } = req.body;
  // For demo, just echo the message
  res.json({ resp: `Echo: ${message}` });
});

/* 📝Activity 2 - Add Router for new API using the new activity1 (exported version from Activity 1)
*/
import echoApiRouter from './echoApi';
app.use(echoApiRouter);

/* 📝Activity 3 - Create Azure OpenaI Chat API*/
import chatRouter from './chat';
app.use(chatRouter);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});