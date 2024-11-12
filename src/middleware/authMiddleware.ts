import { expressjwt } from "express-jwt";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = expressjwt({
    secret: process.env.JWT_SECRET || "default_secret",
    algorithms: ["HS256"],
}).unless({ path: ["/api/login"] });
