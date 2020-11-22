import { ADD_CUENTA, REMOVE_CUENTA,AGREGAR_IMPORTE_A_CUENTA } from "../actions/types";


const cuentasReducer = (state, action) => {
   
    switch (action.type) {
        case ADD_CUENTA:
            return {
                ...state,
                cuentas: [...state.cuentas, action.payload],
            }
        case REMOVE_CUENTA:
            return {
                ...state,
                cuentas: state.cuentas.filter((cuentas) => cuentas.id !== action.payload),
            }
        case AGREGAR_IMPORTE_A_CUENTA:
            //console.log(...state.cuentas.filter((cuentas) => cuentas.id===0));
            
            console.log( state);
            console.log( action.payload);

            
 
               

            return {
                
                 ...state.cuentas[0],
                 importesCargados: [...state.cuentas[0].importesCargados, action.payload]
            }
        default:
            return state;
    }
};

export default cuentasReducer