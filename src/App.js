import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Albums from './components/albums/Albums';

function App() {

  const classSelectedLink = 'pressed';

  return (
    <Router>
      <div id='heading'>
        <nav>
          <ul>
            <li><NavLink to='/albums' activeClassName={classSelectedLink}>Albums</NavLink></li>
            <li><NavLink to='/users' activeClassName={classSelectedLink}>Users</NavLink></li>
          </ul>
        </nav>
      </div>
      <hr />
      <div className='container'>
        <Switch>
          <Route path='/albums'>
            <Albums />
          </Route>
          <Route path='/photos'>
            <div>Photos</div>
          </Route>
          <Route path='/users'>
            <div>Users</div>
          </Route>
          <Route path='*'>
            <Redirect to='/users'></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
