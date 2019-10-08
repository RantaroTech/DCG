<template>
  <div>
    <div class="text">
      <p class="titile">カードを選んでカードを出そう</p>
      <p>タップしたカードでじゃんけんするよ！</p>
      <p>じゃんけんに勝てば相手にダメージ</p>
      <p>あいこだとお互いダメージを受けるぞ</p>
      <p class="titile">相手のHPを0にして勝利しよう！</p>
    </div>
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
.text{
  padding: 10% 5%;
}
.titile{
  font-weight: bold;
  font-size: 20px;
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
