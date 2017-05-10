import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "workshop-ovs.firebaseapp.com",
  databaseURL: "https://workshop-ovs.firebaseio.com/",
  storageBucket: "workshop-ovs.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const messagesRef = firebase.database().ref('/messages')

export default ({ getState, dispatch }) => {

    messagesRef.on('value', (snapshot) => {
      dispatch({
        type: 'MESSAGES_UPDATED',
        messages: snapshot.val()
      })
    });

    return (next) => {
        return (action) => {
          const myName = getState().name
          switch(action.type){
            case 'SEND_MESSAGE_REQUEST': {
              messagesRef.push({
                name: myName,
                message: action.message
              })
              break
            }
            default: {
              return next(action);
            }
          }
        }
    }
}
