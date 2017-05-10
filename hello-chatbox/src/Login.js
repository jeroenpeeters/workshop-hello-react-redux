var React = require('react');

export default class Login extends React.Component {
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this)
  }
  onChange(e){
    this.props.onNameChanged(e.target.value)
  }
  render() {
    return (
      <div>
        <input onChange={this.onChange} />
        <button onClick={this.props.onLogin}>Login</button>
      </div>
    )
  }
}
