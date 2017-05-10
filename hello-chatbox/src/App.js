var React = require('react');
import Login from './redux/Login'

export default class App extends React.Component {
  render() {
    let content = <Login />
    if(this.props.loggedIn){
      content = <div>chatbox</div>
    }
    return (
      <div>
        <h1>Hello Chatbox</h1>
        {content}
      </div>
    )
  }
}
