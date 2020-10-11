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
          twitter: "bem523",
          twitterCount: "10241",
          flower: {
              name: "コチョウラン",
              photo: require("@/assets/PhalaenopsisOrchid.jpg"),
              description:
            "コチョウランの花言葉は「幸福が飛んでくる」「純粋な愛」です。幸せいっぱいなあなたのTweetはコチョウランそのものです。",
          },
        },
        {
          id: "3",
          twitter: "ihechoi3",
          twitterCount: "102",
          flower: {
              name: "コスモス",
              photo: require("@/assets/Cosmos.jpg"),
              description:
            "コスモスの花言葉は「乙女の真心」「調和」「謙虚」です。清潔感と繊細さを兼ね備えたあなたのTweetはコスモスそのものです。",
          }
        },
        {
          id: "4",
          twitter: "chokudai",
          twitterCount: "1022",
          flower: {
                name: "ヒガンバナ",
                photo: require("@/assets/ClusterAmaryllis.jpg"),
              description:
            "ヒガンバナの花言葉は「悲しき思い出」「あきらめ」「独立」「情熱」です。あなたのTweetはヒガンバナの様に悲しみに満ちています。",
          }
        },
        {
          id: "5",
          twitter: "yagi2432",
          twitterCount: "322",
          flower: {
             name: "サクラ",
          photo: require("@/assets/CherryBlossoms.jpg"),
              description:
            "サクラの花言葉は「精神の美」「優美な女性」です。あなたのTweetはしとやかなサクラの様に美しいです。",
          }
        },
        {
          id: "6",
          twitter: "kamohai",
          twitterCount: "42",
          flower: {
                    name: "スズラン",
          photo: require("@/assets/LilyOfTheValley.jpg"),
          description:
            "スズランの花言葉は「再び幸せが訪れる」「純粋」「純潔」「謙遜」です。あなたのTweetは春の訪れを告げるスズランの様です。",
          }
        },
        {
          id: "7",
          twitter: "lyly",
          twitterCount: "42",
          flower: {
                      name: "貧者の薔薇",
          photo: require("@/assets/MiniatureRose.png"),
          description:
            "ミニチュアローズの花言葉は「感謝するぜ」「お前と出会えた」「これまでの全てに!!!」です。あなたのTweetからは人間の底すらない悪意を感じます。",
          }
        },
        {
          id: "8",
          twitter: "ran3243",
          twitterCount: "4220",
          flower: {
            name: "ストロングゼロ",
          photo: require("@/assets/StrongZero.jpg"),
          description:
            "ストロングゼロの酒言葉は「飲む福祉」「虚無の酒」です。支離滅裂なTweetを繰り返すあなたはおそらく酔っぱらっています。ストロングゼロに含まれるアルコール量はテキーラショット3.75杯分と同じらしいですよ。酔いすぎにはご注意を！",
          }
        },
        {
          id: "9",
          twitter: "sae54",
          twitterCount: "40",
          flower: {
                      name: "ユリ",
          photo: require("@/assets/Lily.jpg"),
          description:
            "ユリの花言葉は「純粋」「無垢」「威厳」です。あなたのTweetは威厳に満ちていて堂々たるユリの様です。",
          }
        },
        {
          id: "10",
          twitter: "saex354",
          twitterCount: "240",
          flower: {
             name: "チューリップ",
          photo: require("@/assets/Tulips.jpg"),
          description:
            "チューリップの花言葉は「思いやり」です。あなたのTweetは思いやりに満ちてチューリップの様ですね。「思いやり」の花言葉は、三人の騎士を思いやる美少女の言い伝えにちなむともいわれます。",
          }
        },
        {
          id: "11",
          twitter: "bem",
          twitterCount: "10241",
          flower: {
             name: "ヒガンバナ",
          photo: require("@/assets/ClusterAmaryllis.jpg"),
          description:
            "ヒガンバナの花言葉は「悲しき思い出」「あきらめ」「独立」「情熱」です。あなたのTweetはヒガンバナの様に悲しみに満ちています。",
          }
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
    analyzeSentiment({commit}, linkedText) {
      commit("setErrorMessage", "test");

      let flowers = [
        {
          name: "コチョウラン",
          photo: "PhalaenopsisOrchid.jpg",
          langOfFlowers: "「幸福が飛んでくる」「純粋な愛」",
        },
        {
          name: "コスモス",
          photo: "Cosmos.jpg",
          langOfFlowers: "「乙女の真心」「調和」「謙虚」",
        },
        {
          name: "サクラ",
          photo: "CherryBlossoms.jpg",
          langOfFlowers: "「精神の美」「優美な女性」",
        },
        {
          name: "スズラン",
          photo: "LilyOfTheValley.jpg",
          langOfFlowers: "「再び幸せが訪れる」「純粋」「純潔」「謙遜」",
        },
        {
          name: "アジサイ",
          photo: "Hydrangea.jpg",
          langOfFlowers:
            "「移り気」「冷淡」「辛抱強さ」「冷酷」「無情」「高慢」",
        },
        {
          name: "バラ",
          photo: "Rose.jpg",
          langOfFlowers: "「愛」「美」",
        },
        {
          name: "チューリップ",
          photo: "Tulips.jpg",
          langOfFlowers: "「思いやり」",
        },
        {
          name: "クローバー",
          photo: "Clover.jpg",
          langOfFlowers: "「私を思って」「幸運」「約束」「復讐」",
        },
        {
          name: "ユリ",
          photo: "Lily.jpg",
          langOfFlowers: "「純粋」「無垢」「威厳」",
        },
        {
          name: "ヒガンバナ",
          photo: "ClusterAmaryllis.jpg",
          langOfFlowers: "「悲しき思い出」「あきらめ」「独立」「情熱」",
        },
        {
          id: 11,
          name: "貧者の薔薇",
          photo: "MiniatureRose.png",
          langOfFlowers:
            "「感謝するぜ」「お前と出会えた」「これまでの全てに!!!」",
        },
      ]

      const axios = require("axios");
      const apiKey = "AIzaSyBJMd-cy43E8GRKkOIP5EN0nobvahp2-v0";
      const URL =
        "https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=" +
        apiKey;
      const Headers = {
        "Content-Type": "application/json",
      };
      const data = {
        document: {
          type: "PLAIN_TEXT",
          content: linkedText
        },
      };
      axios
        .post(URL, data, Headers)
        .then((response) => {
          console.log("status:", response.status); // 200
          console.log("body:", response.data); // response body.
          const score = response.data.documentSentiment.score;
          if (score >= 0.4) {
            this.flower=flowers[0];
          }else if (score >=0.32) {
            this.flower=flowers[1];
          }else if (score >=0.24) {
            this.flower=flowers[2];
          }else if (score >=0.16) {
            this.flower=flowers[3];
          }else if (score >=0.08) {
            this.flower=flowers[4];
          }else if (score >=0) {
            this.flower=flowers[5];
          }else if (score >=-0.08) {
            this.flower=flowers[6];
          }else if (score >=-0.16) {
            this.flower=flowers[7];
          }else if (score >=-0.24) {
            this.flower=flowers[8];
          }else if (score >=-0.32) {
            this.flower=flowers[9];
          }else if (score >=-0.4) {
            this.flower=flowers[10];           
          }
          console.log("flower:", this.flower); 
        })
        .catch((err) => {
          console.log("err:", err);
        });
      }
    
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
