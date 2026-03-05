import { Router } from "express";
import { getHome, getUsers, getUserById, createUser } from "../controllers/userController.ts";
import {checkController} from "../controllers/uploadController.ts"

const router = Router(); // express router 

// Home route
router.get("/", getHome);

// Users routes
// # GET
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

// #POST 
router.post("/users", createUser);

// # patch 
router.patch("/users/:id",updateUser)

// upload route
router.get("/check",checkController);

export default router;