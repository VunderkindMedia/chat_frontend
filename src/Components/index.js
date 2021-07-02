import React, {useContext, useEffect, useRef} from 'react';
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
import {AppContext} from '../context/AppContext';


export const Index = () => {
  const { chatInit, socket } = useContext(AppContext);

  useEffect(()=> {
    chatInit();
    return () => {
      socket.close()
    }
  },[])

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
