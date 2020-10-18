import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {

  const { isAuthenticated, logout, login } = props.auth;
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/public">Public</Link></li>
        <li>
          <button onClick={isAuthenticated() ? logout : login }>
            {isAuthenticated() ? "Log Out" : "Log In"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;