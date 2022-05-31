//Importamos los arreglos desde la carpeta 'database'
const { CONTRATISTAS, HABITACIONES, ESTUDIANTES, ALQUILERES, FACTURAS, DETALLE_FACTURAS } = require('../database/data')

//Función que recibe la información de un contratista y lo ingresa en el arreglo 'CONTRATISTAS'
function crearContratista(id_x, nombre_x, dni_x, direccion_x, telefono_x)
{
  CONTRATISTAS.push(
    {
      id_contratista: id_x,
      nombre: nombre_x,
      dni: dni_x,
      direccion: direccion_x,
      telefono: telefono_x,
    }
  );
}

//Función que recibe la información de una habitación y la ingresa en el arreglo 'HABITACIONES'
function crearHabitacion(id_habitacion_x, id_contratista_x, descripcion_x, direccion_x, precio_x, ncamas_x)
{
  HABITACIONES.push(
    {
      id_habitacion: id_habitacion_x,
      id_contratista: id_contratista_x,
      descripcion: descripcion_x,
      direccion: direccion_x,
      precio: precio_x,
      ncamas: ncamas_x,
    }
  );
}

//Función que recibe la información de un estudiante y lo ingresa en el arreglo 'ESTUDIANTES'
function crearEstudiante(id_x, nombre_x, dni_x, fecha_nacimiento_x, lugar_nacimiento_x, sexo_x, correo_x, telefono_x)
{
  ESTUDIANTES.push(
    {
      id_estudiante: id_x,
      nombre: nombre_x,
      dni: dni_x,
      fecha_nacimiento: fecha_nacimiento_x,
      lugar_nacimiento: lugar_nacimiento_x,
      sexo: sexo_x,
      correo: correo_x,
      telefono: telefono_x,
    }
  );
}

//Función que recibe la información de un alquiler y lo ingresa en el arreglo 'ALQUILERES'
function crearAlquiler(id_alquiler_x, id_contratista_x, id_estudiante_x, fecha_entrada_x, fecha_salida_x, servicios_x, observacion_x, total_x)
{
  ALQUILERES.push(
    {
      id_alquiler: id_alquiler_x,
      id_contratista: id_contratista_x,
      id_estudiante: id_estudiante_x,
      fecha_entrada: fecha_entrada_x,
      fecha_salida: fecha_salida_x,
      servicios_incluidos: servicios_x,
      observacion: observacion_x,
      total: total_x,
    }
  );
}

//Función que recibe la información de una factura y la ingresa en el arreglo 'FACTURAS'
function crearFactura(id_factura_x, id_estudiante_x, fecha_factura_x, forma_pago_x)
{
  FACTURAS.push(
    {
    	id_factura: id_factura_x,
      id_estudiante: id_estudiante_x,
      fecha_factura: fecha_factura_x,
      forma_pago: forma_pago_x,
    }
  );
}

//Función que recibe los detalles de una factura y los ingresa en el arreglo 'DETALLE_FACTURAS'
function crearDetalleFactura(id_factura_x, id_contratista_x, total_pago_x)
{
  DETALLE_FACTURAS.push(
    {
    	id_factura: id_factura_x,
      id_contratista: id_contratista_x,
      total_pago: total_pago_x,
    }
  );
}

//Exportar todas las funciones
module.exports = {
  crearContratista,
	crearHabitacion,
	crearEstudiante,
	crearAlquiler,
	crearFactura,
	crearDetalleFactura
}
