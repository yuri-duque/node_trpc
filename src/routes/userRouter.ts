import { router, procedure } from '../trpc/trpc';
import { z } from 'zod';
import { getUsers, getUser, createUser } from '../controllers/userController';

const userRouter = router({
  getUsers: procedure
    .output(
      z.array(
        z.object({
          id: z.number(),
          name: z.string()
        })
      )
    )
    .query(async () => {
      return await getUsers();
    }),

  getUser: procedure
    .input(
      z.object({
        id: z.number()
      })
    )
    .output(
      z
        .object({
          id: z.number(),
          name: z.string()
        })
        .optional()
    )
    .query(async (request) => {
      return await getUser(request);
    }),

  createUser: procedure
    .input(
      z.object({
        name: z.string()
      })
    )
    .output(
      z.object({
        id: z.number(),
        name: z.string()
      })
    )
    .mutation(async (request) => {
      return await createUser(request);
    })
});

export default userRouter;
