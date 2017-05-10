var React = require('react');

import Counter from './Counter'

export default React.createClass({
  render: () => {
    return (
      <div>
        <h1>Hello App</h1>
        <Counter name='Apples'/>
      </div>
    )
  }
});
