import { Request, Response } from "express";

export type route = {
  route: string;
  body: (request: Request, response: Response) => Promise<any>;
  method: "GET" | "POST" | "PUT" | "DELETE";
};
