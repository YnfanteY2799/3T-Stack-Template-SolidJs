import { NextFunction, Request, Response } from "express";

export default function middleware(req: Request, res: Response, next: NextFunction) {
  next();
}
