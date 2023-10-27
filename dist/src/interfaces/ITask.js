"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskZodSchema = void 0;
const zod_1 = require("zod");
const TaskZodSchema = zod_1.z.object({
    title: zod_1.z.string({ invalid_type_error: "Título deve ser um texto!" })
        .min(10, { message: "Título deve ter no mínimo 10 caracteres!" }),
    details: zod_1.z.string({ invalid_type_error: "Detalhes deve ser um texto!" })
        .min(20, { message: "Detalhes deve ter no mínimo 20 caracteres!" }),
    isDone: zod_1.z.boolean(),
    userId: zod_1.z.string().optional(),
    id: zod_1.z.string().optional()
});
exports.TaskZodSchema = TaskZodSchema;
