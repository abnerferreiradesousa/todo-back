"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const TaskModel_1 = __importDefault(require("../../../models/TaskModel"));
const mongoose_1 = require("mongoose");
const taskMock_1 = require("../mocks/taskMock");
describe('2 - Task Model', () => {
    const taskModel = new TaskModel_1.default();
    before(() => {
        sinon_1.default.stub(mongoose_1.Model, 'create').resolves(taskMock_1.taskMockWithId);
    });
    after(() => {
        sinon_1.default.restore();
    });
    describe('1 - Create task', () => {
        it('successfully', async () => {
            const taskCreated = await taskModel.create(taskMock_1.taskMock);
            (0, chai_1.expect)(taskCreated).to.be.deep.equal(taskMock_1.taskMockWithId);
        });
    });
});
