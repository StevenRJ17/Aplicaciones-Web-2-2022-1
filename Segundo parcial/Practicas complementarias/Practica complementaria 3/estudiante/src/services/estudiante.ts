import axios from 'axios'

import { IEstudiante } from '../interface/IEstudiante'

const httpAxios = axios.create({
    baseURL: `http://localhost:8000/api`,
})

const postEstudiante = async (data:IEstudiante|any) => {
    return await httpAxios.post<IEstudiante>('/estudiantes', data)
}

const getEstudiantes = async () => {
    return await httpAxios.get<IEstudiante[]|any>('/estudiantes')
}

const putEstudiante = async (data:IEstudiante) => {
    return await httpAxios.put('/estudiantes', data)
}

const deleteEstudiante = async (id:String) => {
    return await httpAxios.delete(`/estudiantes/${id}`)
}

export {
    getEstudiantes,
    postEstudiante,
    putEstudiante,
    deleteEstudiante
}
