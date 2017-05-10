import App from '../App'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(App)
