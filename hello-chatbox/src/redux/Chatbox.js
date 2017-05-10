import Chatbox from '../Chatbox'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    messages: state.messages || []
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSendMessage: (message) => {
      dispatch({
        type: 'SEND_MESSAGE_REQUEST',
        message: message
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chatbox)
