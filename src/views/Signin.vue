<template>
  <v-container text-center justify-center>
    <v-row>
      <v-col md="8" offset-md="2">
        <h2>Welcome To kotobara!!</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" offset-md="2">
        <v-btn color="primary" @click="loginUser">
          <v-icon class="pr-2">mdi-twitter</v-icon>
          SignIn with twitter
        </v-btn>
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
