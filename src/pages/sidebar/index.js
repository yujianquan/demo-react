import React from "react";
import { NavLink } from 'react-router-dom'

const Sidebar = () => (
  <header className="primary-header">
    <h1>Welcome to our app!</h1>
    <nav>
      <NavLink to="/home" exact activeClassName="active">Home</NavLink>
      <NavLink to="/home/about" activeClassName="active">About</NavLink>
      <NavLink to="/home/user" activeClassName="active">User</NavLink>
    </nav>
  </header>
)
export default Sidebar;