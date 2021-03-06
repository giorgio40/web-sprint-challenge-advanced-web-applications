import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { isLogin } from '../Axios/login'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };
  
  export default PrivateRoute;
        
    






//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in