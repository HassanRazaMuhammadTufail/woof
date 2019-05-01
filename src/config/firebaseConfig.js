import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDoYNwfO6wdLyikY9-YbFfpfGeWMzsl-6w",
  authDomain: "woofappco.firebaseapp.com",
  databaseURL: "https://woofappco.firebaseio.com",
  projectId: "woofappco",
  storageBucket: "woofappco.appspot.com",
  messagingSenderId: "734317247250"
};
const fire = firebase.initializeApp(config);

export default fire;
