import cors from 'cors';
import express from 'express';

import './config/database.js';
import apiRouter from './routes/index.js';
import { apiBaseUrl, port } from './server.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});