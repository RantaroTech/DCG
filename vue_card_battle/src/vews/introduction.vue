<template>
  <div>
    <div>Google Chromeの検証機能でiPhone6~8を選択してプレイしてね！</div>
    <div>じゃんけんカードを選んで相手のHPを０にしたら勝利！</div>

    <div class="btn" @click="goInGame()">プレイ！</div>
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
