import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import Root from './root/Root';
import configureStore from './redux/store/configureStore';

const history = createHistory();

let initialState = {
  user: {
    myItems: [
      {
          id: 1,
          type: {
              title: 'tech'
          }
      },
      {
          id: 2,
          type: {
              title: 'army'
          }
      },
      {
          id: 3,
          type: {
              title: 'army'
          }
      },
      {
          id: 4,
          type: {
              title: 'tech'
          }
      },
      {
          id: 5,
          type: {
              title: 'tech'
          }
      },
      {
          id: 6,
          type: {
              title: 'army'
          }
      }
    ]
  },
  settings: {
    generalTags: [
      {
          title: 'tech',
          name: 'מחשוב'
      },
      {
          title: 'army',
          name: 'צבאי'
      }
    ]
  }
}

const store = configureStore(history, initialState);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)