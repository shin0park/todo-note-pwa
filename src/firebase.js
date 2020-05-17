import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAUt_82ENXQHh5uO8RTUGy2TxScf4dtfpc",
  authDomain: "vue-note-todo.firebaseapp.com",
  databaseURL: "https://vue-note-todo.firebaseio.com",
  projectId: "vue-note-todo",
  storageBucket: "vue-note-todo.appspot.com",
  messagingSenderId: "62624975552",
  appId: "1:62624975552:web:96f66540c32d1fb9dd7b25",
  measurementId: "G-3XCE7YKFR9"
};

export const fireApp = firebase.initializeApp(firebaseConfig);
