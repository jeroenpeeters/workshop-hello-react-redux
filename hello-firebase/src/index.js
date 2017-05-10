var ReactDOM = require('react-dom');
var React = require('react');

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App'

const reducer = (state = {}, action) => {
  console.log('reduce', action);
  switch(action.type){
    case 'PLUS': {
      return Object.assign({}, state, {[action.counter]: (state[action.counter] || 0) + 1})
    }
    case 'MIN': {
      return Object.assign({}, state, {[action.counter]: (state[action.counter] || 0) - 1})
    }
  }
  return state;
}

const store = createStore(reducer, {}, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop)
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
);
