/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCs5qMpad6K4G2nDXnPwNzbNnXqtNtVgnM",
  authDomain: "friendlychat-d15c4.firebaseapp.com",
  projectId: "friendlychat-d15c4",
  storageBucket: "friendlychat-d15c4.appspot.com",
  messagingSenderId: "968199668766",
  appId: "1:968199668766:web:d6739e25b09b3a35eeda0f"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}



