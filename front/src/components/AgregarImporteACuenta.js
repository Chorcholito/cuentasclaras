import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { agregarImporteACuentaAction } from '../redux/actions';



const AgregarImporteACuenta = (propiedades) => {

const [importe,setImportes]=useState('');

const dispatch = useDispatch();

const importesCargados = useSelector(state=>state.importesCargados);


 const crypto = require('crypto');
 var id = crypto.randomBytes(20).toString('hex');
// const agregarImporte = () =>{
//     let  nuevoImporte={
//         idImporte:id,
//         importe:importe
//     }
//     dispatch(agregarImporteACuentaAction(nuevoImporte))
// }
const agregarImporte = ()=>{

    console.log(" ID:"+propiedades.idCuenta+" valor:"+importe);

    let importesCargados={
        idImporte:id,
        importe:100
    }
    dispatch(agregarImporteACuentaAction(importesCargados));

}
    return (
        <div>
            
            <input type="text" value={importe} onChange={(e)=>setImportes(e.target.value)} />
             <button onClick={()=>agregarImporte()}>
               Agregar Importe
             </button>
        </div>
    );
};

export default AgregarImporteACuenta;