import {Pool} from "pg";
import dotenv from "dotenv";
import fs from "fs";
import chalk from "chalk";
import { stringWidth } from "bun";

dotenv.config();


// does env load?
console.log(chalk.green(JSON.stringify({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
},null,2)));


export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});