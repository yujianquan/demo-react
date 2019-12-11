import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch,Redirect} from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute.js'
import mainLayout from './pages/mainLayout/mainLayout.js'
import Login from './pages/login/login.js'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/home' component={mainLayout} ></PrivateRoute>
        <Route path='/login' component={Login} ></Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
