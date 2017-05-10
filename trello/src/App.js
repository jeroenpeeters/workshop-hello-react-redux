var React = require('react');

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Board from './Board'

reducer = (state = {}, action) => {
  console.log('reduce', action);
  return state;

}

const store = createStore(reducer, {})

export default React.createClass({
  render: () => {
    return (
      <div style={{wdith:'100%'}}>
        <h1>Trello</h1>
        <Board />
      </div>
    )
  }
});
