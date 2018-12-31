import { applyMiddleware, createStore, compose } from 'redux';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk"
import { createLogger } from "redux-logger";

import reducer from "./reducers";
const middleware = applyMiddleware(  promise(),  thunk,  createLogger() );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(middleware));
export default store;
