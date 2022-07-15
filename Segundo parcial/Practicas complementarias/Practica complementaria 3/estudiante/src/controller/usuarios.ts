import { IEstudiante } from '../interface/IEstudiante'

import {
  postEstudiante,
  getEstudiantes,
  putEstudiante,
  deleteEstudiante
} from '../services/estudiante'

const limpiarCampos = (
      id: HTMLInputElement,
      idUsuario: HTMLInputElement,
      idAlquiler: HTMLInputElement,
      nombre: HTMLInputElement,
      dni: HTMLInputElement,
      sexo: HTMLInputElement, 
      correo: HTMLInputElement,
      telefono: HTMLInputElement,
      estado: HTMLInputElement
) => {
    id.value = ''
    idUsuario.value = ''
    idAlquiler.value = ''
    nombre.value = ''
    dni.value = ''
    sexo.value = ''
    correo.value = ''
    telefono.value = ''
    estado.value = ''
}

const crearEstudiante = async (datos:IEstudiante) => {
  try {
    const usuario:IEstudiante|any = await postEstudiante(datos)
    !usuario
      ? alert('Error al crear el estudiante')
      : alert(`El estudiante fue creado correctamente`)  
  } catch (err:Error|any) {
    console.log(err)
  }
}

const obtenerEstudiantes = async (cuerpo:HTMLTableElement) => {
  try {
    const response = await getEstudiantes()
    const estudiantes = response.data.estudiantes;
    cuerpo.innerHTML = ''
    estudiantes.map((estudiante:IEstudiante) => {
      cuerpo.innerHTML += `
        <tr>
          <td>${estudiante.id}</td>
          <td>${estudiante.idUsuario}</td>
          <td>${estudiante.idAlquiler}</td>
          <td>${estudiante.nombre}</td>
          <td>${estudiante.dni}</td>
          <td>${estudiante.sexo}</td>
          <td>${estudiante.telefono}</td>
          <td>${estudiante.correo}</td>
          <td>${estudiante.estado}</td>
        </tr>
      `
    })
  } catch (err:Error|any) {
    console.log(err)
  }
}

const actualizarEstudiante = async (
  cuerpo:HTMLTableElement,
  datos:IEstudiante
  ) => {
  try {
    const estudiante:IEstudiante|any = await putEstudiante(datos)
    !estudiante
      ? console.log('Error al actualizar el estudiante')
      : console.log(`El estudiante fue actualizado correctamente`)
        obtenerEstudiantes(cuerpo)
  } catch (err:Error|any) {
    console.log(err)
  }
}

const eliminarEstudiante = async (
  cuerpo:HTMLTableElement,
  id:String
  ) => {
  try {
    const response = await deleteEstudiante(id)
    !response
      ? console.log(`El estudiante fue actualizado correctamente`)
      : console.log('Error al actualizar el estudiante')
        obtenerEstudiantes(cuerpo)
  } catch (err:Error|any) {
    console.log(err)
  }
}

export {
  limpiarCampos,
  crearEstudiante,
  obtenerEstudiantes,
  actualizarEstudiante,
  eliminarEstudiante
}
