import {createStore} from 'redux';
import reducer from './reducers';


const estadoinicial = {
    cuentas:[
        {
            id:0,
            nombre:"cuenta1",
            importesCargados:[
                {
                    idImporte:0,
                    importe:0
                },
                {
                    idImporte:2,
                    importe:0
                }
            ],
            total:0
        },
        {
            id:1,
            nombre:"cuenta2",
            importesCargados:[{
                idImporte:0,
                importe:0
            }],
            total:0
        }
    ]
}

export const store = createStore(
    reducer,
    estadoinicial,
)