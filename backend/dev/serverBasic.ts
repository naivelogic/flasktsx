import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api1/get-message', (req, res) => {
  const { message, context } = req.body;
  // For demo, just echo the message
  res.json({ resp: `Echo: ${message}` });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});