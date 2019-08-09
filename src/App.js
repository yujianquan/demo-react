import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute.js'
import HomePage from './pages/mainPage/main.js'
import About from './pages/about/about.js'
import Login from './pages/login/login.js'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={HomePage} ></PrivateRoute>
        <Route path='/login' component={Login} ></Route>
        <PrivateRoute path='/about' component={About}></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
