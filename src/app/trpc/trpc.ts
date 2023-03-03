import { initTRPC } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

const trpc = initTRPC.context().create();

export const router = trpc.router;
export const middleware = trpc.middleware;
export const procedure = trpc.procedure;

export function createContext({ req, res }: CreateExpressContextOptions) {
  return {};
}
