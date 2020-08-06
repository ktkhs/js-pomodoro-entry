<template>
  <div>
    <h1>Dotask</h1>
    <h2>{{ formatTime }}</h2>
    <v-btn @click="start">start</v-btn>
    <v-btn @click="stop">stop</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      processTime: 1500, // 25min * 60sec
      timerObj: null,
      isActive: false,
    };
  },
  methods: {
    start() {
      let self = this;
      this.timerObj = setInterval(function() {
        self.processTime--;
        if (self.processTime <= 0) {
          self.stop();
        }
      }, 1000);
      this.isActive = true;
    },
    stop() {
      clearInterval(this.timerObj);
      this.isActive = false;
    },
  },
  computed: {
    formatTime() {
      let minitues = Math.floor(this.processTime / 60);
      let second = this.processTime % 60;
      let timeString = [
        ("00" + minitues).slice(-2),
        ("00" + second).slice(-2),
      ].join(":");
      return timeString;
    },
  },
};
</script>

<style scoped lang="scss"></style>
