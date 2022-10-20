import { initTRPC } from '@trpc/server';
import { Context } from './context';

const trpc = initTRPC.context<Context>().create();

const middleware = trpc.middleware;
const router = trpc.router;
const procedure = trpc.procedure;

export { middleware, router, procedure };
