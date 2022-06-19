"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarEstudiante = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarEstudiante = [
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('nombre')
        .exists()
        .isString()
        .isLength({ min: 3, max: 20 })
        .withMessage('El nombre no tiene que tener numeros y minimo 3 y maximo de 20 caracteres'),
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('dni')
        .exists()
        .isString()
        .isLength({ min: 10, max: 10 })
        .withMessage('El dni debe tener un minimo y maximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('sexo')
        .exists()
        .isString()
        .isLength({ min: 5, max: 10 })
        .withMessage('El sexo debe tener un minimo 5 y maximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('correo')
        .exists()
        .isEmail()
        .withMessage('El formato del correo es invalido'),
    // - - - - - - - - - - - - - - - -
    (0, express_validator_1.check)('telefono')
        .exists()
        .isString()
        .isLength({ min: 10, max: 10 })
        .withMessage('El telefono debe tener un minimo y maximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarEstudiante = validarEstudiante;
// .exists()             verifica si el campo está vacío
// .isNumeric()          verifica si el campo es numérico
// .withMessage()        mensaje para el error
//# sourceMappingURL=validarEstudiante.js.map