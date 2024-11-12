import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { unprotectedRouter } from "./routes/unprotectedRoutes";
import { protectedRouter } from "./routes/protectedRoutes";
import { authMiddleware } from "./middleware/authMiddleware";

dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Unprotected routes (e.g., login)
app.use("/api", unprotectedRouter);

// Protected routes
app.use(authMiddleware); // JWT authentication middleware
app.use("/api", protectedRouter);

// Instead of app.listen, export the app for serverless function handler
export default app;
