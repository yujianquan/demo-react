import React from "react";
import {Route , Switch,Redirect} from 'react-router-dom'
import User from '../user/user.js'
import Sidebar from '../sidebar/sidebar.js'
import About from '../about/about.js'
import Home from '../home/home.js'

const HomePage = ({ match })=> (
  <div className="Home-page">
    <Sidebar/>
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={Home} />
        <Route path={`${match.path}/about`} component={About} />
        <Route path={`${match.path}/user`} component={User} />
        <Redirect to={`${match.path}`}/>
      </Switch>
    </main>
  </div>
)

export default HomePage;
