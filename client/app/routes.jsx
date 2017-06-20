import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import App from './app';

import Login from './containers/login/login.container';
import MyInventory from './containers/myInventory/myInventory.container';
import MySignature from './containers/mySignatures/mySignature.container';
import MyCatalog from './containers/catalog/myCatalog.container';


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.get('current'),
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default () => (
  <App>
    <Switch>
      <Redirect exact path="/" to="/inventory" />
      <Route path="/login" component={ Login } />

      <Route exact path="/inventory" component={ UserIsAuthenticated(MyInventory) } />
      <Route path="/inventory/:id" component={ UserIsAuthenticated(MyInventory) } />
      <Route path="/signature" component={ UserIsAuthenticated(MySignature) } />
      <Route path="/myCatalog" component={ MyCatalog } />
    </Switch>
  </App>
)
