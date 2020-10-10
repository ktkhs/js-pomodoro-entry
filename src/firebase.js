import firebase from "firebase";
import router from "./router";
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyB9VuwkiYEXEVOFoVH0LFklF76otDnDJow",
  authDomain: "js-pomodoro-entry.firebaseapp.com",
  databaseURL: "https://js-pomodoro-entry.firebaseio.com",
  projectId: "js-pomodoro-entry",
  storageBucket: "js-pomodoro-entry.appspot.com",
  messagingSenderId: "202031894655",
  appId: "1:202031894655:web:81b96226b10dc79919ef4a",
};

export default {
  init() {
    firebase.initializeApp(firebaseConfig);
  },
  // see: https://qiita.com/nekoGorilla/items/52c8d1f780930d04b13e
  signInWithTwitter() {
    let provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(
        (result) => {
          var user = result.user;
          if (user) {
            const currentUser = {
              displayName: user.displayName,
              photoURL: user.photoURL,
              uid: user.uid,
              accessToken: result.credential.token,
              secretToken: result.credential.secret,
            };
            console.log(user);
            console.log(currentUser);
            store.commit("onAuthUserChanged", currentUser);
            router.push("/");
          } else {
            store.commit("setErrorMessage", "invalied twitter account");
          }
        },
        (err) => {
          store.commit("setErrorMessage", err.message);
        }
      );
  },

  onAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.commit("onAuthUserChanged", user);
      } else {
        store.commit("onAuthUserChanged", null);
      }
    });
  },
};
