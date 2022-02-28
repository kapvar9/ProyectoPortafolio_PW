import db from "../sequelize/models"

const obtenerTecnologias = async () =>{
    //tiene que comunicarse con sequelize
    const tecnologias = await db.Tecnologia.findAll()
    return tecnologias //se devuelve lista
}

//se exporta funcion dao para utilizarla dentro de pages/api/tencoliga
export {obtenerTecnologias}