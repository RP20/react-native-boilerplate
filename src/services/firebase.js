import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCqiYD99gdAzDSKOsECnqVkne0AHz3kv1E",
  authDomain: "clever-bit-128009.firebaseapp.com",
  databaseURL: "https://clever-bit-128009.firebaseio.com",
  storageBucket: "clever-bit-128009.appspot.com",
};
export const firebaseRef = firebase.initializeApp(config);
