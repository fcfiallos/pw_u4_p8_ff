import axios from "axios";

const URL_API = "http://localhost:8081/api/matricula/v1/estudiantes";
//Guardar API
// public void guardar(@RequestBody EstudianteTo estudianteTo)

const guardar = async (body) => {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6ImZjZmlhbGxvc0B1Y2UuZWR1LmVjIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc1Mjg4NDY0MywiZXhwIjoxNzUyODg0NjczLCJqdGkiOiJjMDRkZGMxOC1lNjA5LTQxOTYtYjA2YS1kZDM5NTUwY2QyZDgifQ.ZX0dzEXGdEr6g3XNGZNP002DPWsEixeZIUoLIy56GpDYHfSGW-Ecd1hj913RJfx-ELkuQwVjHL9B9UbmDlZNgeoBx_Xl1MntpUjkTLUW1KDSbCUcyty9HW_2krKIfpFnzTV2whiAo17LHomrjlwFNSvBs7wlD_gA3cCZ6JZNEenfTZGCmaY_u-uD0f0aMOirdZxbHch_OWzLRptS1nxtXV-lR1_-cKRSCHWrTYyagezXVYrWTwPgY1I-mlU4kIg7QUIX2zij707pVWyelX4GizQ3BR1ezOgrsxbK-VSBlrRZ4u8GG_LscDjJOg-UFD0eZB8wX_liUdK8HxbuuPI-GA'
    const data = axios.post(`${URL_API}`, body,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    ).then(resp => resp.data);
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