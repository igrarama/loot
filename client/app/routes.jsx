import React from 'react';
import { Route, Switch } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import App from './app';

import Login from './containers/login/login.container';
import MyInventory from './containers/myInventory/myInventory.container';


// TODO: Add this
// const UserIsAuthenticated = UserAuthWrapper({
//   authSelector: state => state.auth.get('current'),
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'UserIsAuthenticated'
// })

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={ MyInventory} />
      <Route path="/login" component={ Login } />
    </Switch>
  </App>
)
