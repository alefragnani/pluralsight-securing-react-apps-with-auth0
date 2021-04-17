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
import AuthContext from "./AuthContext";

function App(props) {

  const [state, setState] = React.useState({
    auth: new Auth(props.history)
  });

  const { auth } = state;

  return (
    <AuthContext.Provider value={auth}>
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
          component={Profile} 
          />

        <Route
          path="/public"
          component={Public}
          />

        <PrivateRoute 
          path="/private" 
          component={Private}
          />

        <PrivateRoute 
          path="/courses" 
          component={Courses}
          scopes={["read:courses"]}
        />
                
      </div>
    </AuthContext.Provider>
  );
}

export default App;
