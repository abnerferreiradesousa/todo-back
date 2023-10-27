"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const generateError_1 = require("../helpers/generateError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'TOKEN_NOT_FOUND' });
        }
        const tokenIsValid = jsonwebtoken_1.default.verify(authorization, process.env.JWT_SECRET = 'hulkEsmaga');
        req.user = tokenIsValid.data;
        next();
    }
    catch (error) {
        next((0, generateError_1.errorMessage)(401, 'Token must be a valid token'));
    }
};
exports.authToken = authToken;
