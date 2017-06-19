import React from 'react';
import { Route, Switch } from 'react-router';
import App from './app';

import Login from './containers/login/login.container';
import MyInventory from './containers/myInventory/myInventory.container';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={ MyInventory } />
      <Route path="/login" component={ Login } />
    </Switch>
  </App>
)