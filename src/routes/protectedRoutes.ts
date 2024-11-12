import express from "express";
import {
    getAssessments,
    createAssessment,
    updateAssessment,
    deleteAssessment,
} from "../controllers/assessmentController";

export const protectedRouter = express.Router();

protectedRouter.get("/assessments", getAssessments);
protectedRouter.post("/create-assessment", createAssessment);
protectedRouter.put("/update-assessment/:id", updateAssessment);
protectedRouter.delete("/delete-assessments/:id", deleteAssessment);
