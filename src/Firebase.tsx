import firebase from 'firebase/app'
import 'firebase/firestore'

let config = {
  apiKey: 'AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k',
  authDomain: 'yardzen-demo.firebaseapp.com',
  databaseURL: 'https://yardzen-demo.firebaseio.com',
  projectId: 'yardzen-demo',
  storageBucket: 'yardzen-demo.appspot.com',
  messagingSenderId: '509183652730',
  appId: '1:509183652730:web:ba2208f7d8e0882f009cc3',
}

firebase.initializeApp(config)
let db = firebase.firestore()

export default db
