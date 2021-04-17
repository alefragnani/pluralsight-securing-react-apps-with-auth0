import React from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from './Auth/Auth';
import Callback from './Callback';
import Public from './Public';
import Private from './Private';
import Courses from './Courses';
import PrivateRoute from './PrivateRoute';

function App(props) {

  const auth = new Auth(props.history)

  return (
    <>
      <Nav auth={auth}/>
      <div className="body">
        <Route 
          path="/" 
          exact 
          render={props => <Home auth={auth} {...props}/>} 
        />
        
        <Route 
          path="/callback" 
          render={props => <Callback auth={auth} {...props}/>} 
        />
        
        <PrivateRoute 
          path="/profile" 
          auth={auth}
          component={Profile} 
          />

        <Route
          path="/public"
          component={Public}
          />

        <PrivateRoute 
          path="/private" 
          auth={auth}
          component={Private}
          />

        <PrivateRoute 
          path="/courses" 
          component={Courses}
          auth={auth}
          scopes={["read:courses"]}
        />
                
      </div>
    </>
  );
}

export default App;
