import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "workshop-ovs.firebaseapp.com",
  databaseURL: "https://workshop-ovs.firebaseio.com/",
  storageBucket: "workshop-ovs.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const countersRef = firebase.database().ref('/counters')

export default ({ getState, dispatch }) => {

    countersRef.on('value', (snapshot) => {
      dispatch({
        type: 'COUNTERS_UPDATED',
        counters: snapshot.val()
      })
    });

    const getCounterState = (counter) => {
      return getState()[counter] || 0
    }

    return (next) => {
        return (action) => {
          switch(action.type){
            case 'REQUEST_PLUS': {
              countersRef.update({[`/${action.counter}`]: getCounterState(action.counter) + 1})
              break
            }
            case 'REQUEST_MIN': {
              countersRef.update({[`/${action.counter}`]: getCounterState(action.counter) - 1})
              break
            }
            default: {
              return next(action);
            }
          }
        }
    }
}
