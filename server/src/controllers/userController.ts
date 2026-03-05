import type { Request, Response } from "express";
import { pool } from "../db/postgresConnection";
import chalk from "chalk";


export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const resultData = await pool.query("SELECT * FROM users");
    res.json({ resultData: resultData.rows, fullData: resultData, status: "success" });
  } catch (err) {
    console.error(chalk.red("DB ERROR FULL:", err));
    res.status(500).json({ error: err });
  }
};

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

// creates user by name and mail only
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

//updates user name only 
export const updateUser = async (req: Request, res: Response){
  try {
    const {newName , email, } = req.body ;

    const updatedData= await pool.query(`
      UPDATE users
      SET name=$1
      WHERE email = $2`
      ,[newName,email]);

    res.status(200).json({
      message:"updated user name from: ",oldName,"to: ",newName
    })
  }

  catch (err) {
    throw new Error("cannot find user, create user first");
    res.status(404).json({
      error: "user not found"
    })
  }
}