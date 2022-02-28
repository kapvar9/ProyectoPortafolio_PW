//Path: /api/imagenes
const imagenesHandler = (req,res) => {
    if(req.method == "GET"){
        const imagenes = [
            "https://i.ytimg.com/vi/zZCyJiyWdX0/maxresdefault.jpg",
            "https://www.codewithc.com/wp-content/uploads/2018/01/pharmacy-management-system-c-mysql-codewithc2.png",
            "https://proprogramming.org/wp-content/uploads/2014/12/snake-2Bladder-2Bc-2B-2B.jpg"
        ]
        //lo que se le retorna al cliente
        res.json({
            images: imagenes,
            msg: " "
        })
    }else{
        res.status(400).json({
            //400 es error en el cliente
            msg: "Error, metodo no disponible"
    })
    }
}

export default imagenesHandler