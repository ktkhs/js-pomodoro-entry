<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-img
            src="https://picsum.photos/500/300?image=1"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
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
      <v-img
        src="https://bad.src/not/valid"
        lazy-src="https://picsum.photos/id/11/100/60"
        max-width="500"
        max-height="300"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-row>
    <v-row>
      <v-card
        class="mx-auto"
        outlined >
        <v-card-text justify="center" align-content="center">
          <v-row
            justify="center" align-content="center"
          >
          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PhotoDetail",
  data() {
    return {
    };
  },
  methods: {
    getTwitterPosts() {
      console.log("plase write javascript logic here");
    },
  },
};
</script>
