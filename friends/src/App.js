import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';

// const Login = () => {
//   return <h2>Login</h2>;
// };

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
