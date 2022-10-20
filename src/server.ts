import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './trpc/context';
import userRouter from './routes/userRouter';

const endpoint = '/trpc';
const PORT = 3000;

const run = async () => {
  const app = express();

  app.use(express.json());

  app.use((req, _res, next) => {
    // request logger
    console.log('⬅️ ', req.method, req.path, req.body ?? req.query);
    next();
  });

  app.use(
    endpoint,
    trpcExpress.createExpressMiddleware({
      router: userRouter,
      createContext: createContext
    })
  );

  app.get('/', (_req, res) => res.send('hello'));

  app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));
};

run();
