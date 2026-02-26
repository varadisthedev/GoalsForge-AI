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

app.get("/users", async (req, res) => {
  try {
    const resultData = await pool.query("SELECT * FROM users");
    res.json({ resultData: resultData.rows, status: "success" });
  } catch (err) {
    console.error("DB ERROR FULL:", err);
    res.status(500).json({ error: err });
  }
});
app.listen(PORT||3000,()=>{
    log(chalk.gray("###############################"));
    log(chalk.blue("server started at port: ",PORT));
})
