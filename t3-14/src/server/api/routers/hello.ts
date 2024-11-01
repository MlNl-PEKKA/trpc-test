import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const hello = createTRPCRouter({
  read: publicProcedure.query(() => ({
    greeting: `Hello @ ${new Date().toLocaleString()}`,
  })),
});
