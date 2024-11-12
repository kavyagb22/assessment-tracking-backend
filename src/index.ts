import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { unprotectedRouter } from "./routes/unprotectedRoutes";
import { protectedRouter } from "./routes/protectedRoutes";
import { authMiddleware } from "./middleware/authMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Unprotected routes (e.g., login)
app.use("/api", unprotectedRouter);

// Protected routes
app.use(authMiddleware); // JWT authentication middleware
app.use("/api", protectedRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
