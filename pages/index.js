import MenuNavegacion from "../components/menu_navegacion.components";
import Banner from "../components/banner.components";
import Footer from "../components/footer.componentes";
import FormularioLogin from "../components/formulario_login.components";
import ListaProyectos from "../components/lista_proyectos.components";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";


export default function Home() {
  //http://demo9667197.mockable.io/proyectos

  /*const listadoProyectos = [
    {nombre : "Proyecto 1", usuario: "billy", puntaje:4.9},
    {nombre : "Proyecto 2", usuario: "jorge", puntaje:4.7},
    {nombre : "Proyecto 3", usuario: "hernan", puntaje:4.4},
    {nombre : "Proyecto 4", usuario: "kory", puntaje:4.3}
  ]*/

  const [errorLogin, setErrorLogin] = useState(false) //se crea variable de estado
  const [listadoProyectos, setListadoPoryectos] = useState([]) //por defecto es lista vacía
  const [listaImagenes, setListaImagenes] = useState([])

  //el componente se carga y una que lo haga, se ejecutan estas líneas de código
  useEffect(async() =>{
    //llamada AJAX para cargar lista de proyectos
    let response = await fetch("api/proyectos")
    const data = await response.json()
    setListadoPoryectos( data.proyectos)

    //llamada AJAX para llamar imagenes
    response = await fetch("/api/imagenes") //solo se pone ruta de imagenes porque es una url interna
    const dataImagenes = await response.json()
    setListaImagenes(dataImagenes.images)
  },[])
  
  

  const loginHandler = (username,password) => {
    if(username == "billy" && password == "123"){
      location.href = "/main"
    }else{
      console.log("Error en Login")
      setErrorLogin(true) //se actualiza el estado
    }
  }



  return <div>
    <div>
      <header>
        <Image className="logo" src="/images/índice.png" thumbnail={true}/>
        <h1>Mi portafolio</h1>
      </header>
        <MenuNavegacion/>
    </div>
    <div className="mt-4">
      <Banner images={ listaImagenes }/>
      <div className="row mt-4">
          <ListaProyectos proyectos={listadoProyectos} modo={"lista"} />
          <FormularioLogin onLogin={ loginHandler} error={ errorLogin }/>        
      </div>
    </div>
    <Footer />
  </div>
      
}
