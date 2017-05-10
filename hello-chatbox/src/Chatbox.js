var React = require('react');
const _ = require('underscore')

export default class Chatbox extends React.Component {
  constructor(props){
    super(props);

    this.onSend = this.onSend.bind(this)
  }
  onSend(){
    console.log('message is ', this.refs.message.value);
    this.props.onSendMessage(this.refs.message.value)
  }
  render() {
    return (
      <div>
        <div style={{minHeight:200, maxHeight:300, overflow:'scroll', border:'1px solid black'}}>
          {this.props.messages.reverse().map((m) => {
            return <div key={m.id}><strong>{m.name}:</strong> {m.message}</div>
          })}
        </div>
        <hr />
        <input ref='message' />
        <button onClick={this.onSend}>Send</button>
      </div>
    )
  }
}
