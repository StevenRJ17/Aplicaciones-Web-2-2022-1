import './css/style.css'

import {
  limpiarCampos,
  crearEstudiante,
  obtenerEstudiantes,
  actualizarEstudiante,
  eliminarEstudiante
} from './controller/usuarios'

import { IEstudiante } from './interface/IEstudiante'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML += `
  <section>
    <form class="form-producto">
      <h1 class="form-titulo">Estudiante</h1>
      <div class="form-grupo">
        <label for="Identificador" class="form-label">Identificador</label>
        <input id="Identificador" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for="idUsuario" class="form-label">id Usuario</label>
        <input id="idUsuario" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for="idAlquiler" class="form-label">id Alquiler</label>
        <input id="idAlquiler" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for="nombre" class="form-label">Nombre</label>
        <input id="nombre" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for ="dni" class="form-label">dni</label>
        <input id="dni" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for ="sexo" class="form-label">sexo</label>
        <input id="sexo" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for ="correo" class="form-label">correo</label>
        <input id="correo" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for ="telefono" class="form-label">telefono</label>
        <input id="telefono" class="form-control"/>
      </div>
      <div class="form-grupo">
        <label for ="estado" class="form-label">estado</label>
        <input id="estado" class="form-control"/>
      </div>
      <button id="btn-grabar" class="btn">Grabar</button>
      <button  type="button" id="btn-nuevo" class="btn">
        Limpiar campos
      </button>
      <button  type="button" id="btn-consultar" class="btn">
        Consultar
      </button>
    </form>
  </section>
  <section class="sec-datos-tabla">
    <table class="tabla-usuarios">
      <thead>
        <tr>
          <th>Id</th>
          <th>Id Usuario</th>
          <th>Id Alquiler</th>
          <th>Nombre</th>
          <th>Dni</th>
          <th>Sexo</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody id="body-tabla">
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button class="btn" id="btn-editar">
              Editar
            </button>
          </td>
          <td>
            <button class="btn" id="btn-eliminar">
              Eliminar
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
  `

// Botones
const nuevo = document.querySelector<HTMLButtonElement>('#btn-nuevo')!
const consultar = document.querySelector<HTMLButtonElement>('#btn-consultar')!
const grabar = document.querySelector<HTMLButtonElement>('#btn-grabar')!
const editar = document.querySelector<HTMLButtonElement>('#btn-editar')!
const eliminar = document.querySelector<HTMLButtonElement>('#btn-eliminar')!

// Para insertar los datos en el html
const cuerpo = document.querySelector<HTMLTableElement>('#body-tabla')!

// Inputs
const id = document.querySelector<HTMLInputElement>('#Identificador')!
const idUsuario = document.querySelector<HTMLInputElement>('#idUsuario')!
const idAlquiler = document.querySelector<HTMLInputElement>('#idAlquiler')!
const nombre = document.querySelector<HTMLInputElement>('#nombre')!
const dni = document.querySelector<HTMLInputElement>('#dni')!
const sexo = document.querySelector<HTMLInputElement>('#sexo')!
const correo = document.querySelector<HTMLInputElement>('#correo')!
const telefono = document.querySelector<HTMLInputElement>('#telefono')!
const estado = document.querySelector<HTMLInputElement>('#estado')!


// Funciones
nuevo.addEventListener('click', () => {
  limpiarCampos(id, idUsuario, idAlquiler, nombre, dni, sexo, correo, telefono, estado)
})

const obtenerDatos = () => {
  const datos: IEstudiante = {
      id: id.value,
      idUsuario: idUsuario.value,
      idAlquiler: idAlquiler.value,
      nombre: nombre.value,
      dni: dni.value,
      sexo: sexo.value,
      correo: correo.value,
      telefono: telefono.value,
      estado: Boolean(estado.value)
  }
  return datos;
}

grabar.addEventListener('click', async (event) => {
  event.preventDefault()
  const data = obtenerDatos()
  await crearEstudiante(data)
})

consultar.addEventListener('click', async () => {
  await obtenerEstudiantes(cuerpo)
})

editar.addEventListener('click', async () => {
  const data = obtenerDatos()
  await actualizarEstudiante(cuerpo, data)
})

eliminar.addEventListener('click', async () => {
  const data = obtenerDatos()
  await eliminarEstudiante(cuerpo, data.id)
})
