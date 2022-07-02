import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../util/errorResponse";

export default (
  error: ErrorResponse | Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    console.error(error);

    let finalError: ErrorResponse;
    if (error instanceof ErrorResponse) {
      finalError = error;
    } else {
      finalError = new ErrorResponse(500, "SERVER_ERROR", error);
    }
    const status: number = finalError.statusCode || 500;
    res.status(status).json({ error: finalError });
  } catch (e) {
    console.log("======================ERROR====", e);
    res.status(500).json({ error: "SERVER_ERROR" });
  }
};
