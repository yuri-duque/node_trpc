import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization !== 'secret') {
      return null;
    }
    return {
      name: 'alex'
    };
  };

  return {
    req,
    res,
    user: getUser()
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export { createContext, Context };
