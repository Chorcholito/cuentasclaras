import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addCuentaAction } from '../redux/actions';



const AgregarCuenta = () => {

const [cuenta,setCuenta]=useState('');



const dispatch = useDispatch();

//const cuentas = useSelector(state=>state.cuentas);


const crypto = require('crypto');
var id = crypto.randomBytes(20).toString('hex');
const agregarCuenta = () =>{
    let nuevaCuenta={
        id:id,
        nombre:cuenta,
        total:0
    }
    dispatch(addCuentaAction(nuevaCuenta))



}

    return (
        <div>
            <input type="text" value={cuenta} onChange={(e)=>setCuenta(e.target.value)} />
             <button onClick={()=>agregarCuenta()}>
               Agregar Cuenta
             </button>
         
        </div>
    );
};

export default AgregarCuenta;