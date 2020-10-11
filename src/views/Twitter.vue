<template>
  <div>
    <v-btn @click="getTwitterPosts()">getTwitterPosts</v-btn>
    <v-btn @click="analyzeSentiment()">analyzeSentiment</v-btn>
  </div>
</template>

<script>
export default {
  name: "Twitter",
  data() {
    return {
      linkedText: "",
      // flower : {
      //   id:"1",
      //   name:"バラ",
      //   photo:".path",
      //   description:""
      // }
      flower: null,
      flowers: [
        {
          id: 1,
          name: "コチョウラン",
          photo: require("@/assets/PhalaenopsisOrchid.jpg"),
          langOfFlowers:
            "コチョウランの花言葉は「幸福が飛んでくる」「純粋な愛」です。幸せいっぱいなあなたのTweetはコチョウランそのものです。",
        },
        {
          id: 2,
          name: "コスモス",
          photo: require("@/assets/Cosmos.jpg"),
          langOfFlowers:
            "コスモスの花言葉は「乙女の真心」「調和」「謙虚」です。清潔感と繊細さを兼ね備えたあなたのTweetはコスモスそのものです。",
        },
        {
          id: 3,
          name: "サクラ",
          photo: require("@/assets/CherryBlossoms.jpg"),
          langOfFlowers:
            "サクラの花言葉は「精神の美」「優美な女性」です。あなたのTweetはしとやかなサクラの様に美しいです。",
        },
        {
          id: 4,
          name: "スズラン",
          photo: require("@/assets/LilyOfTheValley.jpg"),
          langOfFlowers:
            "スズランの花言葉は「再び幸せが訪れる」「純粋」「純潔」「謙遜」です。あなたのTweetは春の訪れを告げるスズランの様です。",
        },
        {
          id: 5,
          name: "バラ",
          photo: require("@/assets/Rose.jpg"),
          langOfFlowers:
            "バラの花言葉は「愛」「美」です。あなたの愛に満ちたTweetは古くから愛と美の象徴とされてきたバラの様です。バラの由来って「いばら（茨）」らしいですよ。知ってました？",
        },
        {
          id: 6,
          name: "ストロングゼロ",
          photo: require("@/assets/StrongZero.jpg"),
          langOfFlowers:
            "ストロングゼロの酒言葉は「飲む福祉」「虚無の酒」です。支離滅裂なTweetを繰り返すあなたはおそらく酔っぱらっています。ストロングゼロに含まれるアルコール量はテキーラショット3.75杯分と同じらしいですよ。酔いすぎにはご注意を！",
        },
        {
          id: 7,
          name: "ユリ",
          photo: require("@/assets/Lily.jpg"),
          langOfFlowers:
            "ユリの花言葉は「純粋」「無垢」「威厳」です。あなたのTweetは威厳に満ちていて堂々たるユリの様です。",
        },
        {
          id: 8,
          name: "チューリップ",
          photo: require("@/assets/Tulips.jpg"),
          langOfFlowers:
            "チューリップの花言葉は「思いやり」です。あなたのTweetは思いやりに満ちてチューリップの様ですね。「思いやり」の花言葉は、三人の騎士を思いやる美少女の言い伝えにちなむともいわれます。",
        },
        {
          id: 9,
          name: "アジサイ",
          photo: require("@/assets/Hydrangea.jpg"),
          langOfFlowers:
            "アジサイの花言葉は「移り気」「冷淡」「辛抱強さ」「冷酷」「無情」「高慢」です。冷たい言葉を繰り返すあなたのTweetはアジサイの様です。。もう少し思いやりの心をもってTweetしてみましょう。",
        },

        {
          id: 10,
          name: "ヒガンバナ",
          photo: require("@/assets/ClusterAmaryllis.jpg"),
          langOfFlowers:
            "ヒガンバナの花言葉は「悲しき思い出」「あきらめ」「独立」「情熱」です。あなたのTweetはヒガンバナの様に悲しみに満ちています。",
        },
        {
          id: 11,
          name: "貧者の薔薇",
          photo: require("@/assets/MiniatureRose.png"),
          langOfFlowers:
            "ミニチュアローズの花言葉は「感謝するぜ」「お前と出会えた」「これまでの全てに!!!」です。あなたのTweetからは人間の底すらない悪意を感じます。",
        },
      ],
    };
  },

  methods: {
    getTwitterPosts() {
      const axios = require("axios");
      axios
        .get("https://us-central1-kotobana-twitter.cloudfunctions.net/timeline")
        .then((response) => {
          // console.log("status:", response.status); // 200
          // console.log("body:", response.data); // response body.
          this.linkedText = response.data.reduce(
            (accumulator, currentValue) => {
              // console.log("currentValue",currentValue);
              return accumulator + currentValue.text;
            },
            ""
          );
          console.log("text:", this.linkedText);
        })
        .catch((err) => {
          console.log("err:", err);
        });
      console.log("plase write javascript logic here");
    },
    analyzeSentiment() {
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
          content: this.linkedText,
        },
      };
      axios
        .post(URL, data, Headers)
        .then((response) => {
          console.log("status:", response.status); // 200
          console.log("body:", response.data); // response body.
          const score = response.data.documentSentiment.score;
          if (score >= 0.4) {
            this.flower = this.flowers[0];
          } else if (score >= 0.32) {
            this.flower = this.flowers[1];
          } else if (score >= 0.24) {
            this.flower = this.flowers[2];
          } else if (score >= 0.16) {
            this.flower = this.flowers[3];
          } else if (score >= 0.08) {
            this.flower = this.flowers[4];
          } else if (score >= 0) {
            this.flower = this.flowers[5];
          } else if (score >= -0.08) {
            this.flower = this.flowers[6];
          } else if (score >= -0.16) {
            this.flower = this.flowers[7];
          } else if (score >= -0.24) {
            this.flower = this.flowers[8];
          } else if (score >= -0.32) {
            this.flower = this.flowers[9];
          } else {
            this.flower = this.flowers[10];
          }
          console.log("flower:", this.flower);
        })
        .catch((err) => {
          console.log("err:", err);
        });
      console.log("plase write javascript logic here");
    },
  },
};
</script>
