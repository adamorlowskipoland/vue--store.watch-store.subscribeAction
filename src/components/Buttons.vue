<template>
  <div class="wrapper">
    <button @click="updateCount(-1);">- 1</button>
    <button @click="updateCount(1);">+ 1</button>
  </div>
</template>

<script>
export default {
  name: "buttons",
  methods: {
    updateCount(payload) {
      this.$store.dispatch("countAction", payload);
    }
  }
};
</script>
