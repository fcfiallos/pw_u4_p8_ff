import axios from "axios";

const URL_API = "http://localhost:8081/api/matricula/v1/estudiantes";
//Guardar API
// public void guardar(@RequestBody EstudianteTo estudianteTo)

const guardar = async (body) => {
    const data = axios.post(`${URL_API}`, body).then(resp => resp.data);
    console.log(data);
}

//Actualizar API
// public Response actualizar(@RequestBody EstudianteTo estudiante, @PathParam("id") Integer id)
const actualizar = async (body, id) => {
    axios.put(`${URL_API}/${id}`, body).then(resp => resp.data);
}

//Actualizar parcial API
//public Response actualizarParcialPorId(@RequestBody EstudianteTo estudiante, @PathParam("id") Integer id)
const actualizarParcial = async (body, id) => {
    axios.patch(`${URL_API}/${id}`, body).then(resp => resp.data);
}

//Borrar API
//public Response borrarPorId(@PathParam("id") Integer id)
const borrar = async (id) => {
    axios.delete(`${URL_API}/${id}`).then(resp => resp.data);
}

export const guardarFachada = async (body) => {
    await guardar(body);
}

export const actualizarFachada = async (body, id) => {
    await actualizar(body, id);
}

export const actualizarParcialFachada = async (body, id) => {
    await actualizarParcial(body, id);
}

export const borrarFachada = async (id) => {
    await borrar(id);
}