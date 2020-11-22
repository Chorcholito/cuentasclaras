
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from './routers/home';
import homeUsuario from './routers/homeUsuario.js';
import MenuNavegacion from "./routers/menuNavegacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import agregarCuenta from "./routers/agregarCuenta";
import agregarImporte from "./routers/agregarImporte";



function App() {
  return (
    <Provider store={store}>

      <div className="App">

      
      
      <Router>
      <MenuNavegacion />

      <Switch>
      
      <Route path="/agregarImporte/:idCuenta" component={agregarImporte} /> 
      <Route exact path="/agregarCuenta" component={agregarCuenta} /> 
      <Route exact path="/homeUsuario" component={homeUsuario} /> 
      <Route exact path="/" component={Home} />
        
      </Switch>
      </Router>
          
        <br/>

      </div>




    </Provider>
  );
}

export default App;


{/* <Route path="/Loguin" component={Home} />
        <Route path="/Registro" component={Home} /> 
        
        <Route path="/ModificarCuentas" component={Home} /> 
        <Route path="/AgregarValor" component={Home} />  */}