"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const generateError_1 = require("../helpers/generateError");
const generateJWT_1 = __importDefault(require("../helpers/generateJWT"));
const IUser_1 = require("../interfaces/IUser");
const handlerHash_1 = require("../helpers/handlerHash");
class UserService {
    constructor(_user) {
        this._user = _user;
    }
    async create(user) {
        const parsedToUser = IUser_1.UserZodSchema.safeParse(user);
        if (!parsedToUser.success) {
            throw parsedToUser.error;
        }
        const userExists = await this._user.findUser(user);
        if (userExists) {
            throw (0, generateError_1.errorMessage)(http_status_codes_1.StatusCodes.CONFLICT, "Usuário já existente!");
        }
        const passwordHash = await (0, handlerHash_1.generateHash)(user.password);
        const userCreated = await this._user.create({
            email: user.email,
            password: passwordHash,
        });
        const token = (0, generateJWT_1.default)({
            email: userCreated.email,
            userId: userCreated._id.toString()
        });
        const userData = {
            user: {
                email: userCreated.email,
                password: userCreated.password,
                userId: userCreated._id.toString()
            },
            token
        };
        return userData;
    }
    async login(user) {
        const parsedToUser = IUser_1.UserZodSchema.safeParse(user);
        if (!parsedToUser.success) {
            throw parsedToUser.error;
        }
        const userExists = await this._user.findUser(user);
        if (userExists === null) {
            throw (0, generateError_1.errorMessage)(http_status_codes_1.StatusCodes.NOT_FOUND, "Usuário não encontrado!");
        }
        const isSamePassword = await (0, handlerHash_1.compareHash)(user.password, userExists.password);
        if (!isSamePassword) {
            throw (0, generateError_1.errorMessage)(http_status_codes_1.StatusCodes.CONFLICT, "Senha não correspondente!");
        }
        const token = (0, generateJWT_1.default)({
            email: userExists.email,
            userId: userExists._id.toString()
        });
        return { token };
    }
}
exports.default = UserService;
