"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserZodSchema = void 0;
const zod_1 = require("zod");
const UserZodSchema = zod_1.z.object({
    email: zod_1.z.string({ invalid_type_error: "Deve ser um email!" })
        .email({ message: 'Email inválido!' }),
    password: zod_1.z.string({ invalid_type_error: "Senha deve ser um texto!" })
        .min(6, { message: "Senha deve ter no mínimo 6 caracteres!" }),
});
exports.UserZodSchema = UserZodSchema;
