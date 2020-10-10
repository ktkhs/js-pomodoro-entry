<template>
  <div>
    <v-row justify="center">
      <v-col cols="10" offset-md="1">
        <v-form ref="form">
          <v-text-field label="search"></v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-img
            src="../assets/MiniatureRose.png"
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

      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`../assets${n * 5 + 10}`"
          :lazy-src="`../assets${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PhotoGarally",
  created() {
    console.log("created");
    // read local csv
    this.flowers = [
      {
        id: "1",
        name: "貧者の薔薇",
        photo: "./path.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
      {
        id: "2",
        name: "桜",
        photo: "../assets/CherryBlossoms.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
            {
        id: "3",
        name: "クローバー",
        photo: "../assets/Clover.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
            {
        id: "4",
        name: "彼岸花",
        photo: "../assets/ClusterAmaryllis.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
            {
        id: "5",
        name: "コスモス",
        photo: "../assets/Cosmos.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",

      },
            {
        id: "6",
        name: "アジサイ",
        photo: "../assets/Hydrangea.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
            {
        id: "7",
        name: "ユリ",
        photo: "../assets/Lily.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
            {
        id: "8",
        name: "鈴蘭",
        photo: "../assets/LilyOfTheValley.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
            {
        id: "9",
        name: "花",
        photo: "../assets/PhalaenopsisOrchid.jpg",
        description: "あなたのtweetは毒を巻き散らかしてる",
      },
    ];
  },
  data() {
    return {
      flowers: [],
    };
  },
  methods: {
    getTwitterPosts() {
      console.log("plase write javascript logic here");
    },
  },
};
</script>
