import { Router } from 'express';

const basicRouter = Router();

basicRouter.post('/api1/get-message', (req, res) => {
  const { message, context } = req.body;
  res.json({ resp: `Echo: ${message}` });
});

export default basicRouter;