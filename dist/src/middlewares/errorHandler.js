"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const catalog_1 = require("../errors/catalog");
const errorHandler = (err, _req, res, _next) => {
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({ message: err.issues[0].message });
    }
    const messageAsErrorTYpe = err.message;
    const mappedError = catalog_1.errorCatalog[messageAsErrorTYpe];
    if (mappedError) {
        const { httpStatus, error } = mappedError;
        return res.status(httpStatus).json({ error });
    }
    console.error(err);
    return res.status(500).json({ message: err.message });
};
exports.default = errorHandler;
