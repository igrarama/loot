import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  routing,
  user: userReducer,
  settings: settingsReducer
});

export default rootReducer;