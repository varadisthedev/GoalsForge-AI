import type { Request, Response } from "express"
import bcrypt from "bcrypt"
import { pool } from "../db/postgresConnection"
import { generateToken } from "../utils/jwt"

export async function register(req: Request, res: Response) {
    const { email, password } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await pool.query(
            "INSERT INTO users(email,password_hash) VALUES($1,$2) RETURNING id,email",
            [email, hashedPassword]
        )

        const user = result.rows[0]

        const token = generateToken(user.id)

        res.json({
            user,
            token
        })

    } catch (err) {
        res.status(500).json({ error: "Registration failed" })
    }

}


export async function login(req: Request, res: Response) {

    const { email, password } = req.body

    const result = await pool.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
    )

    const user = result.rows[0]

    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" })
    }

    const valid = await bcrypt.compare(password, user.password_hash)

    if (!valid) {
        return res.status(401).json({ error: "Invalid credentials" })
    }

    const token = generateToken(user.id)

    res.json({
        token
    })

}