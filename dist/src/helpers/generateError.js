"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = void 0;
const errorMessage = (status, message) => ({
    name: 'Error',
    status,
    message,
});
exports.errorMessage = errorMessage;
