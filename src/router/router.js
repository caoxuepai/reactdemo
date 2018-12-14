import React from 'react';
import {Redirect,Route,Link,Switch,Router,ReactDom,hashHistory  } from 'react-router-dom';
import Welcome from './welcome';
import About from './About'
ReactDom.render(
    <Router history ={hashHistory}>
        <Switch>
            <Route exact path='/' component={Welcome}></Route>
            <Route exact path='/about' component={About}></Route>
        </Switch>
    </Router>
)



