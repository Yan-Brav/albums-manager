import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Albums from './components/albums/Albums';
import Users from './components/users/Users'
import {SELECTED_LINK} from "./constants/class-css";

function App() {

  return (
    <Router>
      <div id='heading'>
        <nav className='grid-2-items'>
          <NavLink to='/albums' activeClassName={SELECTED_LINK}>Albums</NavLink>
          <NavLink to='/users' activeClassName={SELECTED_LINK}>Users</NavLink>
        </nav>
      </div>
      <hr />
      <div className='container'>
        <Switch>
          <Route path='/albums'>
            <Albums />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='*'>
            <Redirect to='/users'/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
