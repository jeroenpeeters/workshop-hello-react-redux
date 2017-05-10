var React = require('react');


export default class Counter extends React.Component {

  render(){
    return (
      <div>
        I'm a counter for {this.props.name}. Count is {this.props.count} <br />
        <button onClick={this.props.onPlusPressed}>+</button>
        <button onClick={this.props.onMinPressed}>-</button>
      </div>
    )
  }
}
