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
        <router-link
          :to="{ name: 'PhotoDetail', params: { userId: this.thumb.twitter } }"
        >
        <v-card>
          <v-img
            :src="this.thumb.flower.photo"
            class="white--text"
            max-height="300"
          >
          <div class="mt-2 pl-2 text-h3 font-weight-bold">
            {{this.thumb.twitter}}
          </div>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
              {{ this.thumb.twitterCount }}

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in this.$store.state.photos"
        :key="item.id"
        class="d-flex child-flex pa-1"
        cols="4"
      >
        <router-link
          :to="{ name: 'PhotoDetail', params: { userId: item.twitter } }"
        >
          <v-img
            v-bind:src="item.flower.photo"
            :lazy-src="item.flower.photo"
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
    let max_images = Math.floor( Math.random() * this.$store.state.photos.length );
    this.thumb = this.$store.state.photos[max_images];
  },
  data() {
    return {
      thumb: null
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
