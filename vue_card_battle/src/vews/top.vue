<template>
  <div>
    <div>Top</div>
    <div>ようこそ！！！！！</div>
    <div class="btn" @click="goInGame()">go to Top</div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goInGame: function() {
      this.$router.push("/Introduction");
    }
  }
};
</script>

<style scoped>
.btn {
  width: 200px;
  height: 50px;
  background: red;
}
</style>
