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
            console.log(...state.cuentas.filter((cuentas) => cuentas.id===0)); //este console.log muestra los resultados de la cuenta con id 0 (que esta hardcodeado)
            
             //console.log( state);
             //console.log( state.cuentas);
            
            // console.log( action.payload);
               

            return {
                ...state,
               cuentas: [{...state.cuentas[0],//aca pienso que estaria el error. los 0 estan hardcodeados aproposito para tener control de lo que quiero hacer. 
               importesCargados: [...state.cuentas[0].importesCargados, action.payload]//aca pienso que estaria el error. 
            }]



                //  ...state.cuentas[0],
                //  importesCargados: [...state.cuentas[0].importesCargados, action.payload]
            }
        default:
            return state;
    }
};

export default cuentasReducer