import { useState } from "react";

const FormularioLogin = (props) =>{

    //Variables internas (variables de estado) del componente
   const [txtUsername, setTextUsername] = useState("")
   const [txtPassword, setTextPassword] = useState("")

  


   const txtUsernameOnChange = (event) =>{
      const txtUsernameIngresado = event.target.value
      console.log(txtUsernameIngresado)
      setTextUsername(txtUsernameIngresado)
   }

   const txtPasswordChange =  (event) =>{
       setTextPassword(event.target.value)
   }

   const butLoginClick = () => {
      console.log(`Username: ${txtUsername}`)
      console.log(`Password: ${txtPassword}`)
      //se va a ejecutar la funcion que se paso por el props (onLogin)
      props.onLogin(txtUsername,txtPassword)
   }

    return (
      <aside className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Login</h3>
            <form>
              <div>
                <label htmlFor="txt_username" className="form-label"> Username</label>                                 
                <input id="txt_username" type="text" className="form-control" 
                    defaultvalue={txtUsername} onChange={txtUsernameOnChange}/>
              </div>
              <div className="mb-2">
                <label htmlFor="txt_password" className="form-label">Password</label>                  
                <input id="txt_password" type="password" className="form-control" 
                defaultvalue={txtPassword} onChange={txtPasswordChange}/>
              </div>
              <button id="butLogin" className="btn btn-primary" type="button"
                  onClick={ butLoginClick }>Login</button>
              <a href="#">Registro</a>
            </form>
            
            {
              (() => {
                if(props.error){
                  return <div className="alert alert-danger mt-2">Error en login</div>
                }
              })()
            }
          </div>
        </div>
      </aside>
    );
}

export default FormularioLogin