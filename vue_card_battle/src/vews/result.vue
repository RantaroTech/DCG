<template>
  <div>
    <div>リザルト画面</div>
    <div class="btn" @click="goInGame()">また遊んでくれよな！！</div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goInGame: function() {
      this.$router.push("/");
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
