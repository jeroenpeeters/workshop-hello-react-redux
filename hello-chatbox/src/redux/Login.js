import Login from '../Login'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {}
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogin: () => {
      dispatch({
        type: 'LOGIN_REQUEST'
      })
    },
    onNameChanged: (name) => {
      dispatch({
        type: 'NAME_CHANGED',
        name: name
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
