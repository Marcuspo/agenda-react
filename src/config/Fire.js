import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAWBdetpe-vXVAMtJgFlrjzBkXhu8GGcmQ",
    authDomain: "agenda-2e333.firebaseapp.com",
    databaseURL: "https://agenda-2e333.firebaseio.com",
    projectId: "agenda-2e333",
    storageBucket: "agenda-2e333.appspot.com",
    messagingSenderId: "468942129912"
  };

  const Fire = firebase.initializeApp(config);
  export default Fire;