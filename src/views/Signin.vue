<template>
  <v-container text-center justify-center>
    <v-row v-show="$store.state.errorMessage">
      <v-col md="8" offset-md="2">
        <v-alert type="error">{{ $store.state.errorMessage }}</v-alert>
      </v-col>
    </v-row>
    <v-row v-show="$store.state.successMessage">
      <v-col md="8" offset-md="2">
        <v-alert type="success">{{ $store.state.successMessage }}</v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" offset-md="2">
        <h2>Sign In</h2>
      </v-col>
      <v-col md="8" offset-md="2">
        <v-btn @click="loginUser">SignIn with twitter</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Firebase from "@/firebase";
export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    loginUser() {
      console.log("Signin: login");
      Firebase.signInWithTwitter();
    },
  },
};
</script>
