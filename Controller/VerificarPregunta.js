const Validar = (lista, id, respuesta) => {
    let verificar = false
    const array = lista.filter(pre => {
        if (pre.id == id) {
            return pre
        }
    })
    array.map(a => {
        if (a.opciones.correcta === respuesta.toString()) {
            verificar = true
        } else {
            verificar = false
        }
    })
    return verificar
}

export default Validar