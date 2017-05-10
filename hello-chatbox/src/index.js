var ReactDOM = require('react-dom');
var React = require('react');

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import middleware from './redux/middleware'
import App from './redux/App'

const reducer = (state = {}, action) => {
  console.log('reduce', action);
  switch(action.type){
    case 'LOGIN_REQUEST': {
      return Object.assign({}, state, {loggedIn: true})
    }
    case 'NAME_CHANGED': {
      return Object.assign({}, state, {name: action.name})
    }
  }
  return state;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, {}, composeEnhancers(middleware()));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
);
