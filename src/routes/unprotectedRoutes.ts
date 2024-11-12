import express from "express";
import { login, test } from "../controllers/assessmentController";

export const unprotectedRouter = express.Router();

unprotectedRouter.post("/login", login);
unprotectedRouter.get("/test", test);
