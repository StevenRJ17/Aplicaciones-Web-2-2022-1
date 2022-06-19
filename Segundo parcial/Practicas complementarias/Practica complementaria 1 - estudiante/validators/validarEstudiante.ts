import { check } from 'express-validator';
import { validarCampos } from '../middlewares/index';

const validarEstudiante = [
    // - - - - - - - - - - - - - - - -
    check('nombre')
        .exists()
        .isString()
        .isLength({min:3, max:20})
        .withMessage('El nombre no tiene que tener numeros y minimo 3 y maximo de 20 caracteres'),
    // - - - - - - - - - - - - - - - -
    check('dni')
        .exists()
        .isString()
        .isLength({min:10, max:10})
        .withMessage('El dni debe tener un minimo y maximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    check('sexo')
        .exists()
        .isString()
        .isLength({min:5, max:10})
        .withMessage('El sexo debe tener un minimo 5 y maximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    check('correo')
        .exists()
        .isEmail()
        .withMessage('El formato del correo es invalido'),
    // - - - - - - - - - - - - - - - -
    check('telefono')
        .exists()
        .isString()
        .isLength({min:10, max:10})
        .withMessage('El telefono debe tener un minimo y maximo de 10 caracteres'),
    // - - - - - - - - - - - - - - - -
    (req, res, next) => {
        validarCampos(req, res, next)
    }
]

export { validarEstudiante }

// .exists()             verifica si el campo está vacío
// .isNumeric()          verifica si el campo es numérico
// .withMessage()        mensaje para el error
