import type { Request, Response } from "express";
import { pool } from "../db/postgresConnection";
import chalk from "chalk";
import { timeLog } from "console";
const log = console.log;

export const getHome = (req: Request, res: Response): void => {

    log(chalk.green("default route called"));
    try {

        res.status(200).json({
            message: "api is running!"
        })
    }
    catch (err) {
        console.error("ERROR IN HOME ROUTE")
    }
}



export const getUptime = (req: Response, res: Response): any => {
    try {
        log(timeLog);
    }
    catch (err) {
        res.end("erorr in uptime default controller ");
    }
}