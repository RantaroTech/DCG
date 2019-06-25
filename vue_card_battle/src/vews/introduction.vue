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
      this.$router.push('InGame')
    }
  }
}
</script>

<style scoped>
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
