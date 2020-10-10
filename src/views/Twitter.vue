<template>
  <div>
    <v-btn @click="getTwitterPosts()">getTwitterPosts</v-btn>
  </div>
</template>

<script>
export default {
  name: "Twitter",
  data() {
    return {};
  },
  methods: {
    getTwitterPosts() {
      const axios = require('axios');
      axios.get('https://us-central1-kotobana-twitter.cloudfunctions.net/timeline')
      .then(response => {
          console.log('status:', response.status); // 200
         console.log('body:', response.data);     // response body.
      }).catch(err => {
          console.log('err:', err);
      });
      console.log("plase write javascript logic here");
    },
  },
};
</script>
