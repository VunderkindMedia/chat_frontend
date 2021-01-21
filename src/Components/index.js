import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {Login} from './Login';
import {Chat} from './Chat';
import {Admin} from './Admin';
import {NavBar} from './NavBar';

export const Index = () => {

  return (
      <Router>
        <div className={'main'}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route path='/chat'>
                <Chat />
              </Route>
              <Route path='/dashboard'>
                <Admin />
              </Route>
              <Redirect to='/login'/>
            </Switch>
          </div>
        </div>
      </Router>
  )
}
