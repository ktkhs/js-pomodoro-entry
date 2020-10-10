<template>
  <div>
    <v-btn @click="getTwitterPosts()">getTwitterPosts</v-btn>
    <v-btn @click="analyseanalyzeSentiment()">analyseanalyzeSentiment</v-btn>
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
          this.linkedText = response.data.reduce((accumulator, currentValue) => {
            // console.log("currentValue",currentValue);
            return accumulator + currentValue.text;
          }, "");
          console.log("text:", this.linkedText);
        })
        .catch((err) => {
          console.log("err:", err);
        });
      console.log("plase write javascript logic here");
    },
    analyseanalyzeSentiment() {
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
        })
        .catch((err) => {
          console.log("err:", err);
        });
      console.log("plase write javascript logic here");
    },
  },
};
</script>
