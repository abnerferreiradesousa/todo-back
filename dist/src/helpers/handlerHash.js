"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.generateHash = void 0;
const bcrypt_1 = require("bcrypt");
const COMPLEXITY_ENCRYT = 8;
const generateHash = async (password) => (0, bcrypt_1.hash)(password, COMPLEXITY_ENCRYT);
exports.generateHash = generateHash;
const compareHash = async (password, hashed) => await (0, bcrypt_1.compare)(password, hashed);
exports.compareHash = compareHash;
