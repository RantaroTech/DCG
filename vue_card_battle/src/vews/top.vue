<template>
  <div class="top">
    <h1 class="game_title">昆虫じゃんけんカードバトル</h1>
    <img class="top_img" src="../../assets/img/ui/top.png" />
    <h2 class="game_subtitle">~Vue.jsでDCGを作る~</h2>
    <div class="btn_box">
      <div class="btn" @click="goInGame()">ゲームを始める</div>
    </div>
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
.top_img {
  width: 60%;
  position: absolute;
  top: 25vh;
  left: 25%;
}
.game_title {
  padding-top: 18px;
  text-align: center;
  font-size: 24px;
}
.game_subtitle {
  text-align: center;
  font-size: 22px;
  position: absolute;
  bottom: 15vh;
  width: 100%;
}
.btn_box {
  position: absolute;
  bottom: 5vh;
  left: 0;
  width: 100%;
}
.btn {
  text-align: center;
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  width: 30%;
  margin: 0 auto;
}
.btn:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  border-bottom: none; /*線を消す*/
}
</style>
