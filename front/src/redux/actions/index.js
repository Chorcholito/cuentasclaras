//con API
// import {ADD_CUENTA} from "./types";

// export const ADD_CUENTA_ACTION = (cuentas) =>  {
//     fetch().then(
//         dispatch({
//             type:ADD_CUENTA,
//             payload:cuentas,
//         })
//     );
// };

import {ADD_CUENTA,REMOVE_CUENTA,AGREGAR_IMPORTE_A_CUENTA} from "./types";

export const addCuentaAction = (cuentas) =>  ({
    type:ADD_CUENTA,
    payload:cuentas,
});

export const removeCuentaAction = (cuentasId) =>  ({
    type:REMOVE_CUENTA,
    payload:cuentasId,
});
export const agregarImporteACuentaAction = (importesCargados) =>  ({
    type:AGREGAR_IMPORTE_A_CUENTA,
    payload:importesCargados,
});