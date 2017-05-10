var React = require('react');


export default class Counter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: props.initialCount || 0
    }

    this.plus = this.plus.bind(this)
    this.minus = this.minus.bind(this)
  }

  plus(){
    this.setState({count: this.state.count + 1})
  }

  minus(){
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <div>
        I'm a counter for {this.props.name}. Count is {this.state.count} <br />
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}
