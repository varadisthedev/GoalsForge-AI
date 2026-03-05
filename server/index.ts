import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";

import { pool } from "./src/db/postgresConnection.ts"; // named export
import userRoutes from "./src/routes/userRoute.ts"

const log = console.log;
const PORT = process.env.PORT;
const app = express()

dotenv.config();

// app.get("/users", async (req, res) => {
//   try {
//     const resultData = await pool.query("SELECT * FROM users");
//     res.json({ resultData: resultData.rows, status: "success" });
//   } catch (err) {
//     console.error("DB ERROR FULL:", err);
//     res.status(500).json({ error: err });
//   }
// });

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data

// Use routes
app.use("/", userRoutes);

// Optional: Add a separate API router for versioning
// app.use("/api/v1", userRoutes);
log("gen ai integration:");
import geminiAPIfunction from "./src/services/geminiAPI.ts";
let result = await geminiAPIfunction("explain what is black holes in simple words");
log(result);

app.listen(PORT || 3000, () => {
    log(chalk.gray("###############################"));
    log(chalk.blue("server started at port: ", PORT));
})
