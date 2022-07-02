import cors from 'cors';
import express from 'express';

import * as http from 'http';
var https = require('https');
import compression from 'compression';
import { createConnection } from 'typeorm';
import errorMiddleware from './middleware/error';
import rootRout from './root/root.routes';
import paySlipRout from './paySlip/payslip.rout';
import { Socket } from 'socket.io';
import config from 'config';
const PORT = config.get('port') as any;

createConnection().then(() => {
  const app = express();

  app.use(
    cors({
      origin: '*',
    })
  );
  app.use(express.json());
  app.use(compression());
  app.use(express.json({ limit: '1MB' }));
  app.use('/', rootRout);
  app.use('/paySlip', paySlipRout);
  app.use(errorMiddleware);
  app.listen(8000, () => {
    console.log(`Server is running at https://localhost:8000`);
  });
});
