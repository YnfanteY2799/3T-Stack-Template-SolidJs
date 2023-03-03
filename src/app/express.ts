import morgan from "morgan";
import Cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import middleware from "./middleware/middleware";
import { router, createContext } from "./trpc/trpc";

const app = express();

const appRoutes = router({});

app.use(middleware); //App middleware
app.use(morgan("dev")); // Morgan For Server Loggin
app.use(Cors()); // Cors if it's needed due to some endpoint/routes errors
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRoutes,
    createContext,
  })
);

export type AppRoutes = typeof appRoutes;

export default app;

/* This is the main Express config file */
