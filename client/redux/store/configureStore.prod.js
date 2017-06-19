import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'; 
import rootReducer from '../reducers/rootReducer';

const configureStore = (history, intialState) => createStore(
  rootReducer,
  intialState,
  applyMiddleware(thunk, routerMiddleware(history))
);

export default configureStore;