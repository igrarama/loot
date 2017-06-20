import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import user from './userReducer';
import settings from './settingsReducer';

const rootReducer = combineReducers({
  settings,
  router,
  user
});

export default rootReducer;