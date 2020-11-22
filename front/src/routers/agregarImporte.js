
import React, { Component } from "react"; 
import AgregarImporte from "../components/AgregarImporteACuenta";


class agregarImporte extends Component {
 

  
  
   render() {
     const {match} = this.props;
    return (
        <>
         <p>agregar importe</p>
        <AgregarImporte idCuenta={match.params.idCuenta}/>
        
        
       </>
    );
  }
}

export default agregarImporte;