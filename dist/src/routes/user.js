"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const UserService_1 = __importDefault(require("../services/UserService"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const user = new UserModel_1.default();
const userService = new UserService_1.default(user);
const userController = new UserController_1.default(userService);
const route = (0, express_1.Router)();
route.post('/login', (req, res) => userController.login(req, res));
route.post('/', (req, res) => userController.create(req, res));
exports.default = route;
