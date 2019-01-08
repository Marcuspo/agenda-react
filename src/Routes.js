import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Contacts from './containers/Contacts';

    export default ( ) => 
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/NotFound' component={NotFound} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/contacts' component={Contacts} />
        </Switch>
    </BrowserRouter>