import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux'; 
import rootReducer from '../reducers/rootReducer';


const configureStore = (history, intialState) => {
  const store = createStore(
    rootReducer,
    intialState,
    composeWithDevTools(
      applyMiddleware(thunk, createLogger(), routerMiddleware(history))
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;