<template>
  <div class="box">
    <!-- HP -->
    <div class="hp">HP:{{this.hp}}</div>
    <slot/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    hp: Number
  }
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 50px;
  background: #3d92d6;
}
.hp {
  font-size: 36px;
  text-align: center;
  font-family: monospace;
}
</style>
