import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Logout from './components/Logout';
import Login from './components/Login';
import Friends from './components/Friends';
import Navbar from './components/Navbar';
import AddFriend from './components/Friends/AddFriend';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('token'))
  );

  const loggedOn = () => {
    setIsLoggedIn(true);
  };

  const loggedOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Switch>
        <PrivateRoute exact path='/addfriend' component={AddFriend} />
        <PrivateRoute exact path='/friends' component={Friends} />
        <PrivateRoute
          exact
          path='/logout'
          render={(props) => <Logout {...props} loggedOut={loggedOut} />}
        />
        <Route
          exact
          path='/'
          render={(props) => <Login {...props} loggedOn={loggedOn} />}
        />
        <Route
          path='/login'
          render={(props) => <Login {...props} loggedOn={loggedOn} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
