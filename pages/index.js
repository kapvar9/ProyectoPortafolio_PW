
import MenuNavegacion from "../components/menu_navegacion.components";
import Banner from "../components/banner.components";
import Footer from "../components/footer.componentes";
import FormularioLogin from "../components/formulario_login.components";
import ListaProyectos from "../components/lista_proyectos.components";

export default function Home() {
  return <div>
    <div>
      <header>
        <h1>Mi portafolio</h1>
      </header>
        <MenuNavegacion/>
    </div>
    <div className="mt-4">
      <Banner />
      <div className="row mt-4">
        <ListaProyectos />
        <FormularioLogin />
      </div>
    </div>
    <Footer />
  </div>
      
}
