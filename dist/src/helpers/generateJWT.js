"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (payload) => {
    const token = jsonwebtoken_1.default.sign({ data: { email: payload.email, userId: payload.userId } }, process.env.JWT_SECRET = 'hulkEsmaga');
    return token;
};
exports.default = generateJWT;
