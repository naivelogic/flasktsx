import { Router } from 'express';

const echoApiRouter = Router();

echoApiRouter.post('/api/chat-echo2/get-message', (req, res) => {
  const { message, context } = req.body;
  res.json({ resp: `Echo: 👋 im echo 2: ${message}` });
});

export default echoApiRouter;