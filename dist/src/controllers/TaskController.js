"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
class TaskController {
    constructor(_service) {
        this._service = _service;
    }
    async create(req, res) {
        var _a;
        const taskCreated = await this._service.create(req.body, (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId);
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(taskCreated);
    }
    async find(req, res) {
        var _a;
        const tasks = await this._service.find((_a = req.user) === null || _a === void 0 ? void 0 : _a.userId);
        return res.status(http_status_codes_1.StatusCodes.OK).json(tasks);
    }
    async update(req, res) {
        const taskUpdated = await this._service.update({
            ...req.body,
            id: req.params.id
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(taskUpdated);
    }
    async delete(req, res) {
        console.log(req.params);
        await this._service.delete(req.params.id);
        return res.status(http_status_codes_1.StatusCodes.OK).json({ res: "Deletado com sucesso!" });
    }
}
exports.default = TaskController;
