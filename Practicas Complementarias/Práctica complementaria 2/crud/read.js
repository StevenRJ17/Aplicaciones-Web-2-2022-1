//Importamos los arreglos desde la carpeta 'database'
const { CONTRATISTAS, ESTUDIANTES, ALQUILERES } = require('../database/data')

//Función que recibe el id de un contratista para buscarlo en el arreglo 'CONTRATISTAS'
async function buscarContratistaPorId(id)
{
  const contratista = CONTRATISTAS.find((contratista)=> contratista.id_contratista === id);
  if (!contratista)
  {
    const error =  new Error();
    error.message= `El contratista con el id ${id} no pudo ser encontrado`;
    throw error;
  }
  return contratista;
}

//Función que recibe el id de un estudiante para buscarlo en el arreglo 'ESTUDIANTES'
async function buscarEstudiantePorId(id)
{
  const estudiante = ESTUDIANTES.find((estudiante)=> estudiante.id_estudiante === id);
  if (!estudiante)
  {
    const error =  new Error();
    error.message= `El estudiante con el id ${id} no pudo ser encontrado`;
    throw error;
  }
  return estudiante;
}

//Función que recibe el id de un alquiler para buscarlo en el arreglo 'ALQUILERES'
async function buscarAlquilerPorId(id)
{
  const alquiler = ALQUILERES.find((alquiler)=> alquiler.id_alquiler === id);
  if (!alquiler)
  {
    const error =  new Error();
    error.message= `El alquiler con el id ${id} no pudo ser encontrado`;
    throw error;
  }
  return alquiler;
}

//Función que muestra todos los 'ALQUILERES'
async function consultarAlquileres()
{
  //Clonamos el array 'ALQUILERES' ya que en la línea 56 y 58 se va a modificar
  let ALQUILERESTEMP = ALQUILERES.slice();
  try {
    //Usamos un forEach para recorrer el arreglo clonado
    ALQUILERESTEMP.forEach(async function(alquiler, index) {
      //Se busca y guarda el contratista con la id que este en el alquiler
      const contratista = await buscarContratistaPorId(alquiler.id_contratista);
      //Se busca y guarda el estudiante con la id que este en el alquiler
      const estudiante = await buscarEstudiantePorId(alquiler.id_estudiante);
      //Se elimina el atributo 'id_contratista' para el alquiler
      delete ALQUILERESTEMP[index].id_contratista;
      //Se elimina el atributo 'id_estudiante' para el alquiler
      delete ALQUILERESTEMP[index].id_estudiante;
      //Se añade el atributo 'nombre_contratista' para el alquiler
      ALQUILERESTEMP[index].nombre_contratista = contratista.nombre;
      //Se añade el atributo 'nombre_estudiante' para el alquiler
      ALQUILERESTEMP[index].nombre_estudiante = estudiante.nombre;
      //Se muestra por consola el alquiler
      console.log(alquiler);
    });
  } catch (error) {
    //Se captura y se muestra por consola el error 
    console.log(error.message)  
  }
};

//Exportar la funcion 'consultarAlquileres'
module.exports = {
  consultarAlquileres
}
