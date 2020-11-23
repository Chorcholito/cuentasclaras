import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeCuentaAction} from '../redux/actions';
import { Link } from "react-router-dom";


const HomeUsuario = () => {
//listar cuentas
    const cuentas= useSelector((state)=>state.cuentas);
    const dispatch = useDispatch();
    
    
    
    return (
        <div>
            {
                cuentas.map(cuenta=>{
                  
                    return(
                        <div key={cuenta.id}>
                            <p>{cuenta.nombre}</p>
                            <p>{cuenta.total}</p>
                            
                            <br/>
                            <button onClick={()=>dispatch(removeCuentaAction(cuenta.id))}>
                                Borrar Cuenta
                            </button>

                            <Link to={`/agregarImporte/${cuenta.id}`} > agregar Importe</Link>
                        </div>
                    )
                    
                })
            }
        </div>
    );
};

export default HomeUsuario;