import React, { Component } from "react"; 
import { Link } from "react-router-dom";



class MenuNavegacion extends Component {
  render() {
    return (
     <div>
       <Link to="/" > home</Link>
       <Link to="/homeUsuario" > cuentas</Link>
       <Link to="/agregarCuenta" > agregar cuenta</Link>
      
     </div>
    );
  }
}

export default MenuNavegacion;