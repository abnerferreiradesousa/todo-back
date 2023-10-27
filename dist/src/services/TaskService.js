"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const ITask_1 = require("../interfaces/ITask");
const generateError_1 = require("../helpers/generateError");
class TaskService {
    constructor(_task) {
        this._task = _task;
    }
    async create(task, id) {
        const parsedToTask = ITask_1.TaskZodSchema.safeParse(task);
        if (!parsedToTask.success) {
            throw parsedToTask.error;
        }
        return this._task.create(task, id);
    }
    async find(id) {
        return this._task.find(id);
    }
    async update(task) {
        const taskUpdate = await this._task.update(task);
        if (taskUpdate === null) {
            throw (0, generateError_1.errorMessage)(http_status_codes_1.StatusCodes.NOT_FOUND, "Tarefa não encontrada!");
        }
        return taskUpdate;
    }
    async delete(id) {
        await this._task.delete(id);
    }
}
exports.default = TaskService;
