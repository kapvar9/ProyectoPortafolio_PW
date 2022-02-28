// Crear endpoint o mi primer servicio
//Siempre se pone como argumentos de entrada req y ..res
//La función endpoint tiene que tener ruta(path) y metodo(method) para que el servidor
//sepa q función utilizar/qué parte del codigo utilizar

//Ruta (path):/api/alumnos --> no se necesita poner index porque solo hay 1 archivo
//Metodo (method)

const alumnoHandler = (req, res) =>{
    //res.send("Hola Progra web")
    console.log(req.query)
    res.json({
        codigo: req.query.codigo,
        nombre : req.query.nombre,
        msg:"ok"
    })
}

export default alumnoHandler