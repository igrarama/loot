import React from 'react'
import { Route, Switch } from 'react-router'
import App from './app'
import MyInventory from './containers/myInventory/myInventory.container';

export default () => (
  <App>
    <Route path="/" component={ MyInventory } />
  </App>
)