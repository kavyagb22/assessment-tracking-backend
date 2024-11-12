import jwt from "jsonwebtoken";

export const generateToken = (payload: object) => {
    const secret = process.env.JWT_SECRET || "default_secret";
    return jwt.sign(payload, secret, { expiresIn: "1h" });
};
