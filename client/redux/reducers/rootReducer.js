import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import auth from './authReducer';
import settingsReducer from './settingsReducer';
import orderReducer from './orderReducer';
const rootReducer = combineReducers({
  auth,
  router,
  user: userReducer,
  settings: settingsReducer,
  orders: orderReducer
});

export default rootReducer;