export function obtenerPaginasPermitidas(usuario) {
    let arreglo;
    if (usuario === 'admin') {
        //paginas del admin
        arreglo = ['/home', '/about', '/estudiante', '/notas', '/403']
    }
    if (usuario === 'estudiante') {
        //paginas del estudiante
        arreglo = ['/home', '/about', '/estudiante', '/403']
    }
    return arreglo;
}