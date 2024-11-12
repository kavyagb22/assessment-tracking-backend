import app from "../src"; // Adjust the path if necessary
import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
    app(req, res);
};
