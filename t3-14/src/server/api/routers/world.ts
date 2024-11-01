import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const world = createTRPCRouter({
  read: publicProcedure.query(() => ({
    greeting: `Hello @ ${new Date().toLocaleString()}`,
  })),
});
