import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import type { Request, Response, NextFunction } from "express";
import chalk from "chalk";

const log = console.log;
dotenv.config();
if (!process.env.JWT_SECRET) { // .env ALWAYS return string or undefined. this catches undefined
  throw new Error("JWT_SECRET is missing in .env");
}


const JWT_secret_key = process.env.JWT_SECRET as string;

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token;

   if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    jwt.verify(token, JWT_secret_key);
    log(chalk.green("[VALID]token verified for req:",req));
    next();
  } catch {
    log(chalk.red(`[INVALID] token for req: ${req}`));
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default verifyJWT;
