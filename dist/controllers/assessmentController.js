"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssessment = exports.updateAssessment = exports.createAssessment = exports.getAssessments = exports.login = exports.test = exports.validateLoginFields = exports.validateAssessmentFields = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generateToken_1 = require("../util/generateToken");
const dataPath = path_1.default.join(__dirname, "../data.json");
// Helper functions to read and write data to the JSON file
const readData = () => {
    try {
        const data = fs_1.default.readFileSync(dataPath, "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        console.error("Error reading data:", error);
        return [];
    }
};
const writeData = (data) => {
    try {
        fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    }
    catch (error) {
        console.error("Error writing data:", error);
    }
};
const validateAssessmentFields = (req, res, next) => {
    const { candidateName, title, status } = req.body;
    if (!candidateName) {
        res.json({
            status: "2000" /* ResponseStatusCode.OPERATING_FAILED */,
            message: "Candidate Name is required",
        });
        return;
    }
    if (!title) {
        res.json({
            status: "2000" /* ResponseStatusCode.OPERATING_FAILED */,
            message: "Assessment Title is required",
        });
        return;
    }
    if (!status) {
        res.json({
            status: "2000" /* ResponseStatusCode.OPERATING_FAILED */,
            message: "Completion Status is required",
        });
        return;
    }
    if (status !== "Pending" && status !== "Completed") {
        res.json({
            status: "2000" /* ResponseStatusCode.OPERATING_FAILED */,
            message: "Status must be 'Pending' or 'Completed'",
        });
        return;
    }
    next();
};
exports.validateAssessmentFields = validateAssessmentFields;
const validateLoginFields = (req, res, next) => {
    const { username, password } = req.body;
    if (!username) {
        res.json({
            status: "2000" /* ResponseStatusCode.OPERATING_FAILED */,
            message: "Username is required",
        });
        return;
    }
    if (!password) {
        res.json({
            status: "2000" /* ResponseStatusCode.OPERATING_FAILED */,
            message: "Password is required",
        });
        return;
    }
    next();
};
exports.validateLoginFields = validateLoginFields;
const test = (req, res) => {
    res.json({
        status: "0000" /* ResponseStatusCode.OPERATING_SUCCESSFULLY */,
        message: "API working!",
    });
};
exports.test = test;
const login = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (username === "user" && password === "password") {
        const token = (0, generateToken_1.generateToken)({ username });
        res.json({
            status: "0000" /* ResponseStatusCode.OPERATING_SUCCESSFULLY */,
            message: "Login successful",
            token,
        });
    }
    else {
        res.json({
            status: "2002" /* ResponseStatusCode.UNAUTHORIZED */,
            message: "Invalid credentials",
        });
    }
};
exports.login = login;
const getAssessments = (req, res) => {
    const assessments = readData();
    res.json(assessments);
};
exports.getAssessments = getAssessments;
const createAssessment = (req, res) => {
    const assessments = readData();
    const { candidateName, title, date, status, score } = req.body;
    const newAssessment = {
        id: assessments.length > 0
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
exports.createAssessment = createAssessment;
const updateAssessment = (req, res) => {
    const assessments = readData();
    const { id } = req.params;
    const { candidateName, title, date, status, score } = req.body;
    const assessmentIndex = assessments.findIndex((a) => a.id === parseInt(id));
    if (assessmentIndex !== -1) {
        assessments[assessmentIndex] = Object.assign(Object.assign({}, assessments[assessmentIndex]), { candidateName,
            title,
            date,
            status,
            score });
        writeData(assessments);
        res.json(assessments[assessmentIndex]);
    }
    else {
        res.status(404).json({ message: "Assessment not found" });
    }
};
exports.updateAssessment = updateAssessment;
const deleteAssessment = (req, res) => {
    const { id } = req.params;
    let assessments = readData();
    assessments = assessments.filter((a) => a.id !== parseInt(id));
    writeData(assessments);
    res.status(204).send();
};
exports.deleteAssessment = deleteAssessment;
