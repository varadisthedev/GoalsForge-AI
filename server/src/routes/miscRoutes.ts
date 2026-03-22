import { Router } from "express"
import { getUptime } from "../controllers/defaultController"
const router = Router();


router.get("/uptime", getUptime);

export default router;