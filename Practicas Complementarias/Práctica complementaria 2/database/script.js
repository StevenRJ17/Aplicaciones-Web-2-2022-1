const { //Importar las funciones para el ingreso de información en los arreglos
  crearContratista, crearHabitacion, crearEstudiante, 
  crearAlquiler, crearFactura, crearDetalleFactura 
} = require('../crud/create')

//Función para ingresar los datos en los arreglos
function crearDatos() {
  //Creación de los contratistas
  crearContratista(
    1,
    'Jose Bautista',
    '0804571248',
    'Puerta 2 Universitaria',
    '0987654321'
  );
  crearContratista(
    2,
    'Victor Prado',
    '0857458695',
    'Calle Universitaria 8',
    '0925663588'
  );
  crearContratista(
    3,
    'Thiany Garcia',
    '0858784125',
    'Calle Universitaria 7',
    '0988596745'
  );
  
  //Creación de la habitaciones
  crearHabitacion(
    1,
    1,
    'Departamento',
    'Puerta 2 Universitaria',
    130.00,
    1,
  );
  crearHabitacion(
    2,
    2,
    'Suits',
    'Calle Universitaria 8',
    200.00,
    2,
  );
  crearHabitacion(
    3,
    3,
    'Departamento',
    'Calle Universitaria 7',
    180.00,
    1,
  );
  
  //Creación de los estudiantes
  crearEstudiante(
    1,
    'Jalember Goronzabel',
    '1352467890',
    '14/08/2000',
    'Manta',
    'Masculino',
    'Dagovid@gmail.com',
    '0987153246',
  );
  crearEstudiante(
    2,
    'Ronny Tuker',
    '0876259658',
    '05/05/2000',
    'Manta',
    'Masculino',
    'tunnerRo@gmail.com',
    '0905852123',
  );
  crearEstudiante(
    3,
    'Ximena Garcia',
    '1304587625',
    '18/12/2000',
    'Esmeraldas',
    'Femenino',
    'Aranianna@gmail.com',
    '0923632541',
  );
  
  //Creación de los alquileres
  crearAlquiler(
    1,
    1,
    1,
    '01/05/2022',
    '01/05/2023',
    'Luz, agua y wi-fi',
    'Garantia Pagada',
    260.00,
  );
  crearAlquiler(
    2,
    2,
    2,
    '14/08/2022',
    '14/08/2023',
    'Luz, agua y wi-fi',
    'Pagar Garantia',
    400.00,
  );
  crearAlquiler(
    3,
    3,
    3,
    '22/10/2022',
    '22/10/2023',
    'Luz, agua y wi-fi',
    'Garantia Pagada',
    360.00,
  );

  //Creación de las facturas
  crearFactura(
    1,
    1,
    '01/06/2022',
    'Transferencia Bancaria',
  );
  crearFactura(
    2,
    2,
    '14/09/2022',
    'Dinero Efectivo',
  );
  crearFactura(
    3,
    3,
    '22/10/2022',
    'Transferencia Bancaria',
  );
  
  //Creación de los detalles de las facturas
  crearDetalleFactura(
    1,
    1,
    260.00
  );
  crearDetalleFactura(
    2,
    2,
    200.00
  );
  crearDetalleFactura(
    3,
    3,
    360.00
  );
}

module.exports = {
  crearDatos
}
