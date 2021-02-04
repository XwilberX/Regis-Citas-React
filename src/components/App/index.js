import React from 'react';

import HomePage from '../HomePage';
import Dashboard from '../Dashboard';
import Register from '../Register';
import Login from '../Login';
import Navbar from '../Navbar'

/*components required to use material-ui*/
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import { Router } from 'react-router-dom';

/*required components for routing*/
import {BrowserRouter , Switch , Route} from 'react-router-dom';

const theme = createMuiTheme()

function App(props) {
    
    return(
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component= {HomePage}/>
                    <Route exact path='/register' component= {Register}/>
                    <Route exact path='/login' component= {Login}/>
                    <Route exact path='/dashboard' component= {Dashboard}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App;