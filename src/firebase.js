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
  signInWithEmailAndPassword(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        (res) => {
          store.commit("onAuthUserChanged", res.user);
          router.push("/");
        },
        (err) => {
          store.commit("setErrorMessage", err.message);
        }
      );
  },

  signUpWithEmailAndPassword(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        store.commit("setSuccessMessage", `User created!! ${res.user.email}`);
        router.push("/signin");
      })
      .catch((err) => {
        store.commit("setErrorMessage", err.message);
      });
  },

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        store.commit("onAuthUserChanged", null);
        router.push("/signin");
      })
      .catch((err) => {
        store.commit("setErrorMessage", `fail logout (${err}) `);
      });
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
