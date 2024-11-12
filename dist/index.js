"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const unprotectedRoutes_1 = require("./routes/unprotectedRoutes");
const protectedRoutes_1 = require("./routes/protectedRoutes");
const authMiddleware_1 = require("./middleware/authMiddleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Unprotected routes (e.g., login)
app.use("/api", unprotectedRoutes_1.unprotectedRouter);
// Protected routes
app.use(authMiddleware_1.authMiddleware); // JWT authentication middleware
app.use("/api", protectedRoutes_1.protectedRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map