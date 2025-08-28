import express from "express";
import {registerUser,loginUser,adminLogin} from "../controllers/userController.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/admin",adminLogin); // ✅ Admin login route

    

export default router;
