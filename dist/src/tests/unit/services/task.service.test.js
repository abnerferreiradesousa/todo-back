"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const taskMock_1 = require("../mocks/taskMock");
const TaskService_1 = __importDefault(require("../../../services/TaskService"));
const TaskModel_1 = __importDefault(require("../../../models/TaskModel"));
describe('3 - Task Service', () => {
    const taskModel = new TaskModel_1.default();
    const taskService = new TaskService_1.default(taskModel);
    before(() => {
        sinon.stub(taskModel, 'create').resolves(taskMock_1.taskMockWithId);
    });
    after(() => { sinon.restore(); });
    describe('1 - Create task', () => {
        it('Success', async () => {
            const taskCreated = await taskService.create(taskMock_1.taskMock);
            (0, chai_1.expect)(taskCreated).to.be.deep.equal(taskMock_1.taskMockWithId);
        });
        it('Failure', async () => {
            try {
                await taskService.create({});
            }
            catch (error) {
                (0, chai_1.expect)(error).to.be.instanceOf(zod_1.ZodError);
            }
        });
    });
});
