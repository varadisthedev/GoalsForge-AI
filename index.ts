import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";

import {pool} from "./src/db.ts";

dotenv.config();
const log = console.log;
const PORT = process.env.PORT;

const app = express()


app.get("/",(req,res)=>{
    res.send("hello from bun + express")
})

app.get("/users",async (req,res)=>{
    const resultData = await pool.query("SELECT * FROM USERS");
    res.json(resultData);
})
app.listen(PORT||3000,()=>{
    log(chalk.blue("server started at port: ",PORT))
})
