"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarContratista = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarContratista = [
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('nombre')
        .exists()
        .isString()
        .isLength({ min: 3, max: 20 })
        .withMessage('El nombre no debe contener números y mínimo 3 y máximo de 20 caracteres'),
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('dni')
        .exists()
        .isString()
        .isLength({ min: 10, max: 10 })
        .withMessage('El dni debe tener un mínimo y máximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('direccion')
        .trim()
        .exists()
        .isAlphanumeric() // Revisar
        .isLength({ min: 10, max: 50 })
        .withMessage('La dirección debe tener un mínimo 10 y máximo de 50 caracteres'),
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('telefono')
        .exists()
        .isString()
        .isLength({ min: 10, max: 10 })
        .withMessage('El número de teléfono debe tener un mínimo y máximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarContratista = validarContratista;
//# sourceMappingURL=validarContratista.js.map