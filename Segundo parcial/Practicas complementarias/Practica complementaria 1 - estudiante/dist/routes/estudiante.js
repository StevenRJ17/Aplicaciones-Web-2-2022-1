"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validarEstudiante_1 = require("../validators/validarEstudiante");
// Importar las funciones del controlador estudiante
const { obtenerEstudiantes, obtenerEstudiante, crearEstudiante, eliminarEstudiante, actualizarEstudiante } = controllers_1.Estudiante;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el estudiante
router.get('/', obtenerEstudiantes);
router.get('/:id', obtenerEstudiante);
router.post('/', validarEstudiante_1.validarEstudiante, crearEstudiante);
router.put('/:id', actualizarEstudiante);
router.delete('/:id', eliminarEstudiante);
//# sourceMappingURL=estudiante.js.map