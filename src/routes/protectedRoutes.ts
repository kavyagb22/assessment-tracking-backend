import express from "express";
import {
    getAssessments,
    createAssessment,
    updateAssessment,
    deleteAssessment,
    validateAssessmentFields,
} from "../controllers/assessmentController";

export const protectedRouter = express.Router();

protectedRouter.get("/assessments", getAssessments);
protectedRouter.post(
    "/create-assessment",
    validateAssessmentFields,
    createAssessment
);
protectedRouter.put(
    "/update-assessment/:id",
    validateAssessmentFields,
    updateAssessment
);
protectedRouter.delete("/delete-assessments/:id", deleteAssessment);
