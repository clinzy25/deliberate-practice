import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBzHd_qVgBajFo962Uu3NkngpwJQIjKuTo',
  authDomain: 'deliberate-practice-4987e.firebaseapp.com',
  databaseURL: 'https://deliberate-practice-4987e-default-rtdb.firebaseio.com/',
  projectId: 'deliberate-practice-4987e',
  storageBucket: 'deliberate-practice-4987e.appspot.com',
  messagingSenderId: '354081771706',
  appId: '1:354081771706:web:e395b0fabba61895af7283',
});

firebase.firestore();

export const auth = app.auth();
export default app;
