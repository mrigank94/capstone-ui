import './../App.css';
import React, { useEffect, useState } from 'react';
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {Route, Redirect, Switch} from 'react-router-dom';

function App() {

  return (
   <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={SignUp}/>
      <Redirect to='/login'/>
    </Switch>
    
  );
}

export default App;
