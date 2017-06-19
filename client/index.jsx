import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import Root from './root/Root';
import configureStore from './redux/store/configureStore';

const history = createHistory();
const store = configureStore(history);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)