import React, { useState } from "react";
import Home from "./components/Home"
import Movies from "./components/Movies"
import Registration from "./components/Registration"
import About from "./components/About"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header=()=>{
  
  return <div className="header" >
  <p className='text' >Veronika Dalivalovi</p>
   
  </div>
}


export default function MyRouter() {
  return (
      
    <Router>
      <div class="topnav">
      <Header></Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 61px)', backgroundColor: 'rgb(114,160,193)'}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        
      </main>
    </Router>
  );
}
