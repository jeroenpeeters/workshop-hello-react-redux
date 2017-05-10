import Counter from '../Counter'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    count:  state[props.name] || 0
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onPlusPressed: () => {
      dispatch({
        type: 'PLUS',
        counter: props.name
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
