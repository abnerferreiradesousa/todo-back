"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskMongooseSchema = new mongoose_1.Schema({
    title: String,
    details: String,
    isDone: Boolean,
    userId: String,
}, {
    versionKey: false
});
// interface ITaskBack { 
//   // userId: string | undefined; 
//   // id?: string | undefined; 
//   // title: string; 
//   // details: string; 
//   // isDone: boolean; 
//   // _id: string; 
// }
// // userId?: string | undefined;
// // id?: string | undefined;
// // title: string;
// // details: string;
// // isDone: boolean;
class TaskModel {
    constructor(_model = (0, mongoose_1.model)('Task', taskMongooseSchema)) {
        this._model = _model;
    }
    async create(obj, id) {
        const task = await this._model.create({
            ...obj, userId: id,
        });
        const taskMapped = {
            ...obj,
            _id: task._id.toString()
        };
        return taskMapped;
    }
    async find(id) {
        return this._model.find({ userId: id });
    }
    async update({ id, title, details, isDone }) {
        return this._model.findOneAndUpdate({ _id: id }, { title, details, isDone }, { new: true });
    }
    async delete(id) {
        await this._model.findByIdAndDelete({ _id: id });
    }
}
exports.default = TaskModel;
