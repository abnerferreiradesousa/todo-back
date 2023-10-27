"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
class UserController {
    constructor(_service) {
        this._service = _service;
    }
    async create(req, res) {
        const userCreated = await this._service.create(req.body);
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(userCreated);
    }
    async login(req, res) {
        const token = await this._service.login(req.body);
        return res.status(http_status_codes_1.StatusCodes.OK).json(token);
    }
}
exports.default = UserController;
