import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Snackbar } from '@material-ui/core';
//import logo from './logo.svg';
import './App.css';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Login from './componentes/seguridad/Login';
import AppNavbar from './componentes/layout/AppNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from './theme/theme';
import { FirebaseContext } from './server';


import { useStateValue } from './sesion/store';
import openSnackbarReducer from './sesion/reducers/openSnackbarReducer';

/*Version 2*/
function App(props) {
  //Llama al contained
  let firebase = React.useContext(FirebaseContext);
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false)

  const [{ openSnackbar }, dispatch] = useStateValue();

  useEffect(() => {
    firebase.estaIniciado().then(val => {
      setupFirebaseInicial(val);
    })
  })

  return autenticacionIniciada !== false ? (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar ? openSnackbar.open : false}
        autoHideDuration={3000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message = {
          <span id="message-id">
            {openSnackbar ? openSnackbar.mensaje : ""}
          </span>
        }
        onClose = {() => 
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: false,
              mensaje: ""
            }
          })
        }
      >

      </Snackbar>
      <Router>
        <MuiThemeProvider theme={theme}>
          {/*Atributo global*/}
          <AppNavbar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
              <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario}></Route>
              <Route path="/auth/login" exact component={Login}></Route>
            </Switch>
          </Grid>

        </MuiThemeProvider>
      </Router>
    </React.Fragment>
  )
    : null
    ;
}
/*Version 1
class App extends Component {

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          {Atributo global}
          <AppNavbar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
              <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario}></Route>
              <Route path="/auth/login" exact component={Login}></Route>
            </Switch>
          </Grid>
          
        </MuiThemeProvider>
      </Router>
    )
  }
}*/
/*
function App() {
  return (
    <div>
      <h1>Bienvenido al Curso</h1>
    </div>
  );
}
*/
export default App;
