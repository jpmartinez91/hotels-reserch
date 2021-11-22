<template>
  <div id="app" style="zoom: 100%" >
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld: MainPage,
  },
  data() {
    return {
      finger: '',
    };
  },
  mounted() {
    FingerprintJS.load()
      .then((fp) => fp.get())
      .then((result) => {
        console.log(result);
        this.finger = result.visitorId;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
