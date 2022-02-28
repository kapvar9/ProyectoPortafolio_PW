const guardarProyecto = (nombreProyecto, usuario,rating) => {

    const proyecto = {
        //se crea objeto de JS-> propoedad nombre: valor
        id:1,
        nombre:nombreProyecto,
        usuario: usuario,
        rating:rating
    }

    const proyectosStr = localStorage.getItem("proyectos") //getitem para obtener objetos del local storage

    //[{"id":"1",nombre":"sdsss","usuario":"wer2","rating":"4"},{},{}]
    if(proyectosStr != null){
        const proyectos = JSON.parse(proyectosStr)
        //JSON.parse() convierte string en formaro JSON a objeto en Javascript
        

        const ultimoId = proyectos[proyectos.length-1].id //dame el id del último proyecto que se guarda en ultimoId

        proyecto.id = ultimoId+1 

        proyectos.push(proyecto) //si tienes un arreglo, le agrega un nuevo elemento al arreglo

        localStorage.setItem("proyectos", JSON.stringify(proyectos))
    }else{
        const proyectos = [proyecto]
        localStorage.setItem("proyectos", JSON.stringify(proyectos))
        //JSON.stringify() convierte string en objeto en Javascript  a formato JSON 
    }
}

const obtenerProyectos = () =>{
    const proyectosStr = localStorage.getItem("proyectos")
    if(proyectosStr != null){
        return JSON.parse(proyectosStr)
    }else{
        return []
    }
}

const eliminarProyectos = (id) => {
    const proyectosStr = localStorage.getItem("proyectos")
    if(proyectosStr != null){
        const proyectos = JSON.parse(proyectosStr)
        let posicion =0
        let posicionEncontrada = -1
        for(let proyecto of proyectos){
            if(proyecto.id == id){
                posicionEncontrada = posicion //se asigna posicion a posicionEncontrada
                break
            }
            posicion++;
        }
        if(posicionEncontrada >= 0){
            proyectos.splice(posicionEncontrada,1)

            localStorage.setItem("proyectos", JSON.stringify(proyectos))
        }
        
    }
}

const obtenerProyecto = (id) => {
    const proyectosStr = localStorage.getItem("proyectos")
    if(proyectosStr !=null){
        const proyectos = JSON.parse(proyectosStr)
        for(let proyecto of proyectos) {
            if(proyecto.id == id) {
                return proyecto
            }
        }
    }
    return null
}

const modificarProyecto = (proyecto) => {
    const proyectosStr = localStorage.getItem("proyectos")
    if(proyectosStr !=null){
        const proyectos = JSON.parse(proyectosStr)
        for(let proy of proyectos) {
            if(proyecto.id == proy.id) {
                proy.nombre = proyecto.nombre
                proy.usuario = proyecto.usuario
                proy.rating = proyecto.rating
                break
            }
        }
        localStorage.setItem("proyectos", JSON.stringify(proyectos))
    }
}

export { guardarProyecto, obtenerProyectos , eliminarProyectos , obtenerProyecto, modificarProyecto }