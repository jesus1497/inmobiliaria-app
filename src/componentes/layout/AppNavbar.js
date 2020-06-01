import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
//import { Toolbar, Typography } from '@material-ui/core';
import BarSession from './bar/BarSession';

class AppNavbar extends Component {
    render() {
        return (
            <div>
                {/*Global en todas las vistas de la pagina*/}
                <AppBar position="static">
                    <BarSession />
                </AppBar>
            </div>
        );
    }
}

export default AppNavbar;