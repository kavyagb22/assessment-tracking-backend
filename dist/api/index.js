"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src")); // Adjust the path if necessary
exports.default = (req, res) => {
    (0, src_1.default)(req, res);
};
