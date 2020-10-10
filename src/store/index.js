import Vue from "vue";
import Vuex from "vuex";
//import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    photos: [],
    loginUser: null,
    myTweets: null,
    errorMessage: "",
    successMessage: "",
  },
  mutations: {
    addPhoto(state, photo) {
      state.photos.push(photo);
    },
    setMyTweets(state, tweets) {
      state.myTweets = tweets;
    },
    onAuthUserChanged(state, user) {
      state.loginUser = user;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setSuccessMessage(state, message) {
      state.successMessage = message;
    },
  },
  actions: {
    createData({ commit }) {
      let photos = [
        {
          id: "2",
          name: "桜",
          twitter: "bem523",
          twitterCount: "10241",
          photo: require("@/assets/CherryBlossoms.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "3",
          name: "クローバー",
          twitter: "ihechoi3",
          twitterCount: "102",
          photo: require("@/assets/Clover.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "4",
          name: "彼岸花",
          twitter: "chokudai",
          twitterCount: "1022",
          photo: require("@/assets/ClusterAmaryllis.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "5",
          name: "コスモス",
          twitter: "yagi2432",
          twitterCount: "322",
          photo: require("@/assets/Cosmos.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "6",
          name: "アジサイ",
          twitter: "kamohai",
          twitterCount: "42",
          photo: require("@/assets/Hydrangea.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "7",
          name: "ユリ",
          twitter: "lyly",
          twitterCount: "42",
          photo: require("@/assets/Lily.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "8",
          name: "鈴蘭",
          twitter: "ran3243",
          twitterCount: "4220",
          photo: require("@/assets/LilyOfTheValley.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "9",
          name: "花",
          twitter: "sae54",
          twitterCount: "40",
          photo: require("@/assets/PhalaenopsisOrchid.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "10",
          name: "薔薇",
          twitter: "saex354",
          twitterCount: "240",
          photo: require("@/assets/Rose.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "11",
          name: "桜",
          twitter: "bem",
          twitterCount: "10241",
          photo: require("@/assets/CherryBlossoms.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
      ];
      photos.forEach((photo) => {
        commit("addPhoto", photo);
      });
    },

    getMyPosts({ commit }) {
      const axios = require("axios");
      axios
        .get("https://us-central1-kotobana-twitter.cloudfunctions.net/timeline")
        .then((response) => {
          // console.log("status:", response.status); // 200
          // console.log("body:", response.data); // response body.
          commit("setMyTweets", response.data);
          //this.linkedText = response.data.reduce(
          //  (accumulator, currentValue) => {
          //    // console.log("currentValue",currentValue);
          //    return accumulator + currentValue.text;
          //  },
          //  ""
          //);
          //console.log("text:", this.linkedText);
        })
        .catch((err) => {
          commit("setErrorMessage", err);
        });
    },
  },
  modules: {},
  getters: {
    isSignedIn: (state) => (state.loginUser ? true : false),
    uid: (state) => (state.loginUser ? state.loginUser.uid : null),
    photoByTwitter: (state) => (id) => {
      return state.photos.find((v) => {
        return v.twitter === id;
      });
    },
  },
});
