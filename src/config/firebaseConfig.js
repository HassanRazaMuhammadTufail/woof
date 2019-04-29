import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAiXMyNRj8L3RCJeA2LMbqN5e7h-43Nz68",
  authDomain: "meeting-apps.firebaseapp.com",
  databaseURL: "https://meeting-apps.firebaseio.com",
  projectId: "meeting-apps",
  storageBucket: "meeting-apps.appspot.com",
  messagingSenderId: "1046837661714"
};
const fire = firebase.initializeApp(config);

export default fire;
