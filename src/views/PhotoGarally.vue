<template>
  <div>
    <!--
    <v-row justify="center">
      <v-col cols="10" offset-md="1">
        <v-form ref="form">
          <v-text-field label="search"></v-text-field>
        </v-form>
      </v-col>
    </v-row>
    -->
    <v-row>
      <v-col>
        <v-card>
          <v-img
            src="../assets/MiniatureRose.png"
            class="white--text align-end"
            max-height="300"
          >
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in this.$store.state.photos"
        :key="item.id"
        class="d-flex child-flex pa-0"
        cols="4"
      >
        <router-link
          :to="{ name: 'PhotoDetail', params: { userId: item.twitter } }"
        >
          <v-img
            v-bind:src="item.photo"
            :lazy-src="item.photo"
            aspect-ratio="1"
          >
            <div class="mt-2 pl-2 text-h6 font-weight-bold">
              @{{ item.twitter }}
            </div>
            <div class="flower">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              {{ item.twitterCount }}
            </div>
          </v-img>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PhotoGarally",

  created() {
    this.createData();
  },
  data() {
    return {
      flowers: [],
    };
  },
  methods: {
    ...mapActions(["createData"]),
    getTwitterPosts() {
      console.log("plase write javascript logic here");
    },
  },
};
</script>

<style scoped>
.flower {
  color: #ffffff;
  margin: 0;
  position: absolute;
  padding-right: 5px;
  bottom: 0;
  width: 100%;
  text-align: right;
}
</style>
