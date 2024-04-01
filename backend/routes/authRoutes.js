import express from "express";
import { signin, signup , googleSignIn } from '../controllers/auth.controller.js'

const app = express();

const router = express.Router();

router.post("/signup", signup);
router.post("/signin" , signin);
router.post("/google" , googleSignIn);


export default router;
