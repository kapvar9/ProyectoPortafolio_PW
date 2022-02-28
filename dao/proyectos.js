//import db from "../sequelize/models"

const db = require("../sequelize/models")
//Si se usa await, se usar async
const guardarProyecto = async (nombre,usuario,rating,tecnologias) => {
    //Insercion --> crea un nuevo proyecto en la base de datos
    const proyectoGuardado = await db.Proyecto.create({
        nombre : nombre,
        idusuario : usuario,
        rating : rating
    })

    //por cada de uno de los ID, se registran los datos en la tabala intermedia
    for (let idtecnologia of tecnologias){
        await db.ProyectoXTecnologia.create({ //crea nuevo registro
            idproducto : proyectoGuardado.id,
            idtecnologia : idtecnologia
        })
    }

    return proyectoGuardado
}

const obtenerProyectos = async() => {
    //Query--> pára obtener grupo de elementos
    const proyectos = await db.Proyecto.findAll({
        order : [
            ["id", "DESC"]
        ]
    })
    return proyectos
}

const eliminarProyecto = async (id) => {
    //Primero eliminar proyecto de id en la tabla intermedia
    db.ProyectoXTecnologia.destroy({
        where : {
            idproyecto : id
        }
    })
    //Luegp se puede eliminar el proyecto en tabla proyecto
    //Delete a la tabla Proyecto
    await db.Proyecto.destroy({
        where : {
            id : id
        }
    })
}

const obtenerProyecto = async (id) => {
  
    //Query por un proyecto de determinado id
    const proyecto = await db.Proyecto.findOne({
        where : {
            id : id
        }
    })
    return proyecto
}

const modificarProyecto = async (proyecto) =>{
    //Eliminar todas las tecnologías del proyecto en tabla intermedia
    await db.ProyectoXTecnologia.destroy({
        where : {
            idproyecto : proyecto.id
        }
    })

    //Agregamos las nuevas tecnologias
    for (let idtecnologia of proyecto.tecnologias){
        await db.ProyectoXTecnologia.create({
            idproducto : proyectoGuardado.id,
            idtecnologia : idtecnologia       
        })
    }

    //Proyecto que queremos modificar
    const proyectoAModificar = await obtenerProyecto(proyecto.id)

    proyectoAModificar.nombre = proyecto.nombre
    proyectoAModificar.idusuario = proyecto.usuario
    proyectoAModificar.rating = proyecto.rating

    //Acutalizamos proyecto en la bd
    await proyectoAModificar.save()
}

export {guardarProyecto,obtenerProyectos,eliminarProyecto,obtenerProyecto,modificarProyecto}