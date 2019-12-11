import React from "react";
import {Route , Switch,Redirect} from 'react-router-dom'
import User from '../../pages/user/index.js'
import Sidebar from '../../pages/sidebar/index.js'
import About from '../../pages/about/index.js'
import Home from '../../pages/home/index.js'

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
