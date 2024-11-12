import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import { generateToken } from "../util/generateToken";
import { ResponseStatusCode } from "../util/constants";

interface Assessment {
    id: number;
    candidateName: string;
    title: string;
    date: string;
    status: string;
    score: number | null;
}

const dataPath = path.join(__dirname, "../data.json");

// Helper functions to read and write data to the JSON file
const readData = (): Assessment[] => {
    try {
        const data = fs.readFileSync(dataPath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data:", error);
        return [];
    }
};

const writeData = (data: Assessment[]) => {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error writing data:", error);
    }
};

export const test = (req: Request, res: Response) => {
    res.json({ message: "API working!" });
};

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (username === "user" && password === "password") {
        const token = generateToken({ username });
        res.json({
            status: ResponseStatusCode.OPERATING_SUCCESSFULLY,
            message: "Login successful",
            token,
        });
    } else {
        res.status(401).json({
            status: ResponseStatusCode.UNAUTHORIZED,
            message: "Invalid credentials",
        });
    }
};

export const getAssessments = (req: Request, res: Response) => {
    const assessments = readData();
    res.json(assessments);
};

export const createAssessment = (req: Request, res: Response) => {
    const assessments = readData();
    const { candidateName, title, date, status, score } = req.body;
    const newAssessment: Assessment = {
        id:
            assessments.length > 0
                ? assessments[assessments.length - 1].id + 1
                : 1,
        candidateName,
        title,
        date,
        status,
        score,
    };
    assessments.push(newAssessment);
    writeData(assessments);
    res.status(201).json(newAssessment);
};

export const updateAssessment = (req: Request, res: Response) => {
    const assessments = readData();
    const { id } = req.params;
    const { candidateName, title, date, status, score } = req.body;
    const assessmentIndex = assessments.findIndex((a) => a.id === parseInt(id));

    if (assessmentIndex !== -1) {
        assessments[assessmentIndex] = {
            ...assessments[assessmentIndex],
            candidateName,
            title,
            date,
            status,
            score,
        };
        writeData(assessments);
        res.json(assessments[assessmentIndex]);
    } else {
        res.status(404).json({ message: "Assessment not found" });
    }
};

export const deleteAssessment = (req: Request, res: Response) => {
    const { id } = req.params;
    let assessments = readData();
    assessments = assessments.filter((a) => a.id !== parseInt(id));
    writeData(assessments);
    res.status(204).send();
};
