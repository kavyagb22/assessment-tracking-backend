import express from "express";
import { login } from "../controllers/assessmentController";

export const unprotectedRouter = express.Router();

unprotectedRouter.post("/login", login);
