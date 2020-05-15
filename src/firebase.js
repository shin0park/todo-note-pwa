import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyCFpn4KWALe5om3Z-wSLp92zXVlRgr8FWU',
  authDomain: 'todo-vue-pwa-a910f.firebaseapp.com',
  databaseURL: 'https://todo-vue-pwa-a910f.firebaseio.com',
  projectId: 'todo-vue-pwa-a910f',
  storageBucket: 'todo-vue-pwa-a910f.appspot.com',
  messagingSenderId: '22789479981',
  appId: '1:22789479981:web:34622040821f0cb36f22a4',
  measurementId: 'G-C7M6ESVKD0'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firestore = new firebase.firestore()

export { firestore }


