import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import auth from './authReducer';

const rootReducer = combineReducers({
  auth,
  router
});

export default rootReducer;