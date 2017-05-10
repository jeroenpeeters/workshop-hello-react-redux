var React = require('react');
import Login from './redux/Login'
import Chatbox from './redux/Chatbox'

export default class App extends React.Component {
  render() {
    let content = <Login />
    if(this.props.loggedIn){
      content = <Chatbox />
    }
    return (
      <div>
        <h1>Hello Chatbox</h1>
        {content}
      </div>
    )
  }
}
