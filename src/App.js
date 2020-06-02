import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//import logo from './logo.svg';
import './App.css';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Login from './componentes/seguridad/Login';
import AppNavbar from './componentes/layout/AppNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"; 
import theme from './theme/theme';


class App extends Component {

  render() {
    return (
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
    )
  }
}
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
