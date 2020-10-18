import Navbar from 'core/components/Navbar';
import Home from 'pages/Home';
import Search from 'pages/Search';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;