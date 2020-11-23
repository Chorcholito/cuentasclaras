import {createStore} from 'redux';
import reducer from './reducers';


const estadoinicial = {
    cuentas:[
        {
            id:"0",
            nombre:"cuenta1",
            importesCargados:[
            {
                idImporte:"0",
                importe:"100"
            },
            {
                idImporte:"1",
                importe:"200"
            },
            ],
            total:0
        },
        {
            id:"2",
            nombre:"cuenta2",
            importesCargados:[
            {
                idImporte:"0",
                importe:"100"
            },
            {
                idImporte:"1",
                importe:"200"
            },
            ],
            total:0
        },
    ]
}

export const store = createStore(
    reducer,
    estadoinicial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);