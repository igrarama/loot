import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import user from './userReducer';
import settings from './settingsReducer';
import orders from './orderReducer';
const rootReducer = combineReducers({
  settings,
  router,
  orders,
  user
});

export default rootReducer;