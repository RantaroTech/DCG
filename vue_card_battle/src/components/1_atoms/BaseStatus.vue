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
  height: 70px;
  background: #3d92d6;
}
</style>
