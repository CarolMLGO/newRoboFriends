import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './container/App';
import * as serviceWorker from './serviceWorker';

//redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { searchRobotsReducer, requestRobotsReducer } from "./store/reducers/reducers"
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// const logger = createLogger();

// const rootReducer 
const rootReducer = combineReducers({
    seRR: searchRobotsReducer,
    reRR: requestRobotsReducer
})

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); // middleware will run in order
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();