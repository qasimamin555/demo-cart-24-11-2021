import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../Api/auth-helper'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !auth.isAuthenticated() ? 
    (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    ):(
      <Component {...props}/>
    )  
  )}/>
)

export default PrivateRoute