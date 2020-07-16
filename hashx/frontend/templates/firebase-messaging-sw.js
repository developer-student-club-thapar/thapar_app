importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.16.0/firebase-messaging.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyCv_vUZ9fZOoLORwke5hUqlWj-U-Tdcc_0',
  authDomain: 'romzzz-8f520.firebaseapp.com',
  databaseURL: 'https://romzzz-8f520.firebaseio.com',
  projectId: 'romzzz-8f520',
  storageBucket: 'romzzz-8f520.appspot.com',
  messagingSenderId: '747133091690',
  appId: '1:747133091690:web:d51d7e440a436899de2f13',
  measurementId: 'G-2E0W03XGBK',
});
const messaging = firebase.messaging();
