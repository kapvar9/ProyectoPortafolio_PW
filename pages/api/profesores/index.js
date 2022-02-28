
//Ruta: /api/profesores
//Method [GET, POST]
//En la peticion POST: Podemos enviar data en el cuerpo de la peticion
//Peticion GET: La data la enviamos por la url
const profesoresHandler = (req, res) => {
    if(req.method == "GET"){
        //Se ha realizado una peticion GET
        res.json({
            msg:"Responde a peticion GET"
        })
        
    }else{
        //Se realio una peticion POST
        console.log(req.body.nombre) //la data se envia al cuerpo de la peticion
        res.json({
            msg:"Responde a peticion POST"
        })
    }
}
export default profesoresHandler