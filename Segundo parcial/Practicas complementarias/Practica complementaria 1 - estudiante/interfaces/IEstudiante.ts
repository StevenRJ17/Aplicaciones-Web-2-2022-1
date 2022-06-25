import Schema from 'mongoose';

export interface IEstudiante {
    usuario: String,
    alquiler: String,
    nombre: String,
    dni: String,
    sexo: String,
    correo: String,
    telefono: String,
    estado: Boolean,
}
