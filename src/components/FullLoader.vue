<template>
  <div class="cover">
    <button class="cover__close" @click="$emit('toggle-loader');">
      &times;
    </button>
    <img
      src="http://www.sageflyfish.com/resources/admin/widgets/loading.gif"
      alt="loading"
      class="cover__loader"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}
.cover__close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: 700;
  cursor: pointer;
}
.cover__loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
