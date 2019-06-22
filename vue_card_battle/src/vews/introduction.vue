<template>
  <div>
    <div>Top</div>
    <div class="btn" @click="goInGame()">じゃんけんカードを選んで相手のHPを０にしたら勝利！</div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goInGame: function() {
      this.$router.push("InGame");
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
