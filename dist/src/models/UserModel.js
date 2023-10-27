"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userMongooseSchema = new mongoose_1.Schema({
    email: String,
    password: String,
}, {
    versionKey: false
});
class UserModel {
    constructor(_model = (0, mongoose_1.model)('User', userMongooseSchema)) {
        this._model = _model;
    }
    async create(obj) {
        return this._model.create(obj);
    }
    async findUser({ email }) {
        return this._model.findOne({ email });
    }
}
exports.default = UserModel;
