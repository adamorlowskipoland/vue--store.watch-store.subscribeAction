<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" />
    <div>
      <h2>Store Count is: {{ count }}</h2>
    </div>
    <Buttons />
    <div>
      <button @click="$store.dispatch('resetCount');">
        call test action
      </button>
      <button @click="toggleLoader(true);">toggleLoader</button>
    </div>
    <full-loader v-show="loading" @toggle-loader="toggleLoader(false);" />
  </div>
</template>

<script>
import Buttons from "./components/Buttons";
import FullLoader from "./components/FullLoader";

export default {
  name: "App",
  components: {
    Buttons,
    FullLoader
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    toggleLoader(state = false) {
      this.loading = state;
    },
    subscibeStoresActions() {
      this.$store.subscribeAction({
        before: (action, state) => {
          console.log("before store action fired");
          console.log(action);
          this.toggleLoader(true);
        },
        after: (action, state, payload) => {
          console.log("after store action fired");
          console.log(action);
          console.log(payload);
          this.toggleLoader(false);
        }
      });
    }
  },
  mounted() {
    console.log("mounted app");
    this.subscibeStoresActions();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
