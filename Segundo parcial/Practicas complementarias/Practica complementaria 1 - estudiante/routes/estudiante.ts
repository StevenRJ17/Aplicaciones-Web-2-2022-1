import { Router } from 'express';

import { Estudiante } from '../controllers';

import { validarEstudiante } from '../validators/validarEstudiante'

// Importar las funciones del controlador estudiante
const{
    obtenerEstudiantes,
    obtenerEstudiante,
    crearEstudiante,
    eliminarEstudiante,
    actualizarEstudiante
} = Estudiante;

const router = Router();

// Rutas para el estudiante
router.get('/', obtenerEstudiantes);
router.get('/:id', obtenerEstudiante);
router.post('/', validarEstudiante, crearEstudiante);
router.put('/:id', actualizarEstudiante);
router.delete('/:id', eliminarEstudiante);

// Rutas a exportar
export { router }
