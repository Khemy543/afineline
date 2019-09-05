import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomepageLayout from './pages/homepage'
import Knowmorepage from './pages/knowmore'
import Signup from './pages/signup'
import Sexualpage from './pages/sexual'


export const Routers =() => 
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={ HomepageLayout } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/know-more' component={ Knowmorepage } />
        <Route exact path='/sexual-harassment' component={ Sexualpage } />
        
        </Switch>
        </BrowserRouter>