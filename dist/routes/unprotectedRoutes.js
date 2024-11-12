"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unprotectedRouter = void 0;
const express_1 = __importDefault(require("express"));
const assessmentController_1 = require("../controllers/assessmentController");
exports.unprotectedRouter = express_1.default.Router();
exports.unprotectedRouter.post("/login", assessmentController_1.login);
//# sourceMappingURL=unprotectedRoutes.js.map