import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from '../app/routes';
import { ConnectedRouter } from 'react-router-redux';

console.log(ConnectedRouter);

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default Root