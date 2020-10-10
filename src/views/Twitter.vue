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
          photo: "PhalaenopsisOrchid.jpg",
          langOfFlowers: "「幸福が飛んでくる」「純粋な愛」",
        },
        {
          id: 2,
          name: "コスモス",
          photo: "Cosmos.jpg",
          langOfFlowers: "「乙女の真心」「調和」「謙虚」",
        },
        {
          id: 3,
          name: "サクラ",
          photo: "CherryBlossoms.jpg",
          langOfFlowers: "「精神の美」「優美な女性」",
        },
        {
          id: 4,
          name: "スズラン",
          photo: "LilyOfTheValley.jpg",
          langOfFlowers: "「再び幸せが訪れる」「純粋」「純潔」「謙遜」",
        },
        {
          id: 5,
          name: "アジサイ",
          photo: "Hydrangea.jpg",
          langOfFlowers:
            "「移り気」「冷淡」「辛抱強さ」「冷酷」「無情」「高慢」",
        },
        {
          id: 6,
          name: "バラ",
          photo: "Rose.jpg",
          langOfFlowers: "「愛」「美」",
        },
        {
          id: 7,
          name: "チューリップ",
          photo: "Tulips.jpg",
          langOfFlowers: "「思いやり」",
        },
        {
          id: 8,
          name: "クローバー",
          photo: "Clover.jpg",
          langOfFlowers: "「私を思って」「幸運」「約束」「復讐」",
        },
        {
          id: 9,
          name: "ユリ",
          photo: "Lily.jpg",
          langOfFlowers: "「純粋」「無垢」「威厳」",
        },
        {
          id: 10,
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
            this.flower=this.flowers[0];
          }else if (score >=0.32) {
            this.flower=this.flowers[1];
          }else if (score >=0.24) {
            this.flower=this.flowers[2];
          }else if (score >=0.16) {
            this.flower=this.flowers[3];
          }else if (score >=0.08) {
            this.flower=this.flowers[4];
          }else if (score >=0) {
            this.flower=this.flowers[5];
          }else if (score >=-0.08) {
            this.flower=this.flowers[6];
          }else if (score >=-0.16) {
            this.flower=this.flowers[7];
          }else if (score >=-0.24) {
            this.flower=this.flowers[8];
          }else if (score >=-0.32) {
            this.flower=this.flowers[9];
          }else if (score >=-0.4) {
            this.flower=this.flowers[10];           
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
