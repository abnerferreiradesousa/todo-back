"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeId = exports.taskMockWithId = exports.taskMock = void 0;
const fakeId = "aaaaaaaaaaaaaaaaaaaaaaaa";
exports.fakeId = fakeId;
const taskMockWithId = {
    title: 'Title task 1 Title task 1',
    details: 'Details task 1 Title task 1 Title task 1',
    userId: "62e4486c5db2ec3d8c01b1cf",
    _id: "62e4486c5db2ec3d8c01b1cf",
    isDone: false,
};
exports.taskMockWithId = taskMockWithId;
const taskMock = {
    userId: '62e4486c5db2ec3d8c01b1cf',
    title: 'Title task 1 Title task 1',
    details: 'Details task 1 Title task 1 Title task 1',
    isDone: false
};
exports.taskMock = taskMock;
