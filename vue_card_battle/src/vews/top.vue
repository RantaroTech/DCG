<template>
  <div class="top">
    <h1 class="game_title">昆虫じゃんけんカードバトル</h1>
    <img class="top_img" src="../../assets/img/ui/top.png">
    <h2 class="game_subtitle">~Vue.jsでDCGを作る~</h2>
    <div class="btn" @click="goInGame()">ゲームを始める</div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goInGame: function() {
      this.$router.push('/Introduction')
    }
  }
}
</script>

<style scoped>
.top_img{
  width: 250px;
  position: absolute;
  top: 160px;
  left: 85px;
}
.game_title{
  text-align: center;
  font-size: 26px;
}
.game_subtitle{
  text-align: center;
  font-size: 22px;
  position: absolute;
  bottom: 60px;
  width: 100%;
}
.btn {
  text-align: center;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  width: 120px;
  position: absolute;
  bottom: 20px;
  left: 110px;
}
.btn:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
</style>
