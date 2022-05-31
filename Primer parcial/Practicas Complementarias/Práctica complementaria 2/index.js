//Se importan las funciones para el funcionamiento del programa
const { crearDatos } = require('./database/script')
const { consultarAlquileres } = require('./crud/read')

//Se crean los datos en los arreglos
crearDatos();
//Se consultan los alquileres
consultarAlquileres();
