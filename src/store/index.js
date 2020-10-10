import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    photos: [],
    loginUser: null,
    errorMessage: "",
    successMessage: "",
  },
  mutations: {
    addPhoto(state, photo) {
      state.photos.push(photo);
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTask(state, { id, task }) {
      const index = state.tasks.findIndex((t) => t.id === id);
      Vue.set(state.tasks, index, task);
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((t) => t.id === id);
      state.tasks.splice(index, 1); // splice-> 指定したindexから要素を一つ取り除く
    },
    onAuthUserChanged(state, user) {
      state.loginUser = user;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setSuccessMessage(state, message) {
      state.successMessage = message;
    },
  },
  actions: {
    createData({ commit }) {
      let photos = [
        {
          id: "2",
          name: "桜",
          twitter: "bem523",
          twitterCount: "10241",
          photo: require("@/assets/CherryBlossoms.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "3",
          name: "クローバー",
          twitter: "ihechoi3",
          twitterCount: "102",
          photo: require("@/assets/Clover.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "4",
          name: "彼岸花",
          twitter: "chokudai",
          twitterCount: "1022",
          photo: require("@/assets/ClusterAmaryllis.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "5",
          name: "コスモス",
          twitter: "yagi2432",
          twitterCount: "322",
          photo: require("@/assets/Cosmos.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "6",
          name: "アジサイ",
          twitter: "kamohai",
          twitterCount: "42",
          photo: require("@/assets/Hydrangea.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "7",
          name: "ユリ",
          twitter: "lyly",
          twitterCount: "42",
          photo: require("@/assets/Lily.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "8",
          name: "鈴蘭",
          twitter: "ran3243",
          twitterCount: "4220",
          photo: require("@/assets/LilyOfTheValley.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "9",
          name: "花",
          twitter: "sae54",
          twitterCount: "40",
          photo: require("@/assets/PhalaenopsisOrchid.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
        {
          id: "10",
          name: "薔薇",
          twitter: "saex354",
          twitterCount: "240",
          photo: require("@/assets/Rose.jpg"),
          description: "あなたのtweetは毒を巻き散らかしてる",
        },
      ];
      photos.forEach((photo) => {
        commit("addPhoto", photo);
      });
    },
    fetchTasks({ getters, commit }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks`)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              let task = doc.data();
              task.id = doc.id;
              commit("addTask", task);
            });
          });
      }
    },
    addTaskByName({ getters, commit }, task_name) {
      let task = {};
      task.title = task_name;
      task.countPomodoro = 0;
      task.dateLimit = new Date().getTime();
      task.createdAt = new Date().getTime();
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks`)
          .add(task)
          .then((doc) => {
            task.id = doc.id;
            commit("addTask", task);
          });
      }
    },
    updateTask({ getters, commit }, { id, task }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks`)
          .doc(id)
          .update(task)
          .then(() => {
            commit("updateTask", { id, task });
          });
      }
    },
    deleteTask({ getters, commit }, id) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks/`)
          .doc(id)
          .delete()
          .then(() => {
            commit("deleteTask", id);
          });
      }
    },
  },
  modules: {},
  getters: {
    isSignedIn: (state) => (state.loginUser ? true : false),
    uid: (state) => (state.loginUser ? state.loginUser.uid : null),
    photoByTwitter: (state) => (id) => {
      return state.photos.find((v) => {
        return v.twitter === id;
      });
    },
  },
});
