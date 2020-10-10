<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-img :src="photo.photo" class="white--text">
            <div class="pt-4 pl-4 text-h4 font-weight-bold">
              @{{ photo.twitter }}
            </div>
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
      <v-col offset="1" cols="10">
        <div class="text-h4 font-weight-bold pt-5">
          {{ photo.name }}
        </div>
        <div class="pt-5">
          {{ photo.description }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PhotoDetail",
  created() {
    this.photo = this.$store.getters.photoByTwitter(this.$route.params.userId);
  },
  data() {
    return {
      photo: null,
    };
  },
  methods: {
    getTwitterPosts() {
      console.log("plase write javascript logic here");
    },
  },
};
</script>
