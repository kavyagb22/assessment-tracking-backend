import express from "express";
import {
    login,
    test,
    validateLoginFields,
} from "../controllers/assessmentController";

export const unprotectedRouter = express.Router();

unprotectedRouter.post("/login", validateLoginFields, login);
unprotectedRouter.get("/test", test);
