import type{ Request, Response } from "express";
import { pool } from "../db.ts";
import chalk from "chalk";

export const getHome = (req: Request, res: Response): void => {
  res.send("hello from bun + express");
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const resultData = await pool.query("SELECT * FROM users");
    res.json({ resultData: resultData.rows, fullData:resultData,status: "success" });
  } catch (err) {
    console.error(chalk.red("DB ERROR FULL:", err));
    res.status(500).json({ error: err });
  }
};

// You can add more controller functions
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const resultData = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    
    if (resultData.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    
    res.json({ resultData: resultData.rows[0], status: "success" });
  } catch (err) {
    console.error("DB ERROR FULL:", err);
    res.status(500).json({ error: err });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email } = req.body;
    const resultData = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).json({ resultData: resultData.rows[0], status: "success" });
  } catch (err) {
    console.error("DB ERROR FULL:", err);
    res.status(500).json({ error: err });
  }
};