import express from "express";
import { signup } from '../controllers/auth.controller.js'

const app = express();

const router = express.Router();

router.post("/signup", signup);

export default router;
