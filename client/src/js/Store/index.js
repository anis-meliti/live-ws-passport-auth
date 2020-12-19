import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../reducers';
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
