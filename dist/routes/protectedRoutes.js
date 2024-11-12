"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = void 0;
const express_1 = __importDefault(require("express"));
const assessmentController_1 = require("../controllers/assessmentController");
exports.protectedRouter = express_1.default.Router();
exports.protectedRouter.get("/assessments", assessmentController_1.getAssessments);
exports.protectedRouter.post("/create-assessment", assessmentController_1.createAssessment);
exports.protectedRouter.put("/update-assessment/:id", assessmentController_1.updateAssessment);
exports.protectedRouter.delete("/delete-assessments/:id", assessmentController_1.deleteAssessment);
