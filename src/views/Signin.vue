<template>
  <v-container text-center justify-center>
    <v-row>
      <v-col md="8" offset-md="2">
        <h2>Sign In</h2>
        <form>
          <v-text-field
            label="Username"
            v-model="username"
            autocomplete="username"
          />
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="password"
            counter
            @click:append="showPassword = !showPassword"
            autocomplete="current-password"
          />
        </form>
        <v-btn @click="loginUser">SignIn</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          You don't have an account?
          <router-link to="/signup">create account now!!</router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    },
  },
};
</script>
