import { obtenerTecnologias } from "../../../dao/tecnologias"

//Aqui se pone el endpoint
const tecnologiasHandler = async(req,res) =>{
    if(req.method == "GET"){
        //Comunicarnos con la bd para obtener lista de tecnologias
        const tecnologias = await obtenerTecnologias()
        res.json({
            msg: "",
            tecnologias : tecnologias
        })
    }else{
        res.satus(400).json({
            msg: "Error, metodo no permitido"
        })
    }
}
export default tecnologiasHandler