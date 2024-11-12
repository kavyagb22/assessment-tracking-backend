"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const express_jwt_1 = require("express-jwt");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.authMiddleware = (0, express_jwt_1.expressjwt)({
    secret: process.env.JWT_SECRET || "default_secret",
    algorithms: ["HS256"],
}).unless({ path: ["/api/login"] });
//# sourceMappingURL=authMiddleware.js.map