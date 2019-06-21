<template>
  <div class="card_content" :class="card_data.name">
    <!-- グー -->
    <div class="img_box">
      <img class="card_img" v-if="card_data.name==='rock'" src="../../../assets/rock.png">
    </div>
    <div class="icon_box" v-if="card_data.name==='rock'">
      <div class="icon"></div>
      <div class="mark">✊</div>
    </div>
    <!-- チョキ -->
    <div class="img_box" v-if="card_data.name==='scissors'">
      <img class="card_img" src="../../../assets/scissors.png">
    </div>

    <div class="icon_box" v-if="card_data.name==='scissors'">
      <div class="icon"></div>
      <div class="mark">✌️</div>
    </div>
    <!-- パー -->
    <div class="img_box" v-if="card_data.name==='paper'">
      <img class="card_img" src="../../../assets/paper.png">
    </div>
    <div class="icon_box" v-if="card_data.name==='paper'">
      <div class="icon"></div>
      <div class="mark">🖐️</div>
    </div>
    <slot/>
    <div class="atack_num">{{card_data.atack}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {},
  props: {
    card_data: {
      name: { type: String, default: null },
      atack: { type: Number, default: 0 },
      is_show: { type: Boolean, default: true }
    }
  },
  created() {
    console.info(this.card_data)
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.card_content {
  width: 140px;
  height: 140px;
}
/* .icon {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 36px;
  width: 50px;
  height: 50px;
  text-align: center;
} */
.img_box {
  width: 120px;
  height: 120px;
  margin: 10px auto;
  position: absolute;
  top: 10px;
  left: 10px;
}
.card_img {
  width: 100%;
  height: 100%;
}
.atack_num {
  text-align: right;
  background: darkred;
  width: 50%;
  height: fit-content;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 24px;
  font-weight: bold;
  font-family: serif;
}

.mark {
  width: 42px;
  height: 42px;
  font-size: 32px;
  text-align: center;
  position: absolute;
  top: -22px;
  left: -13px;
}

.icon {
  margin: 0 auto;
  width: 50px;
  height: 30px;
  display: block;
  position: fixed;
  margin-left: -15px;
  margin-top: -15px;
  background: #1fbace;
  transition: all 0.2s linear;
}

.icon span {
  width: 100%;
  height: 90px;
  line-height: 90px;
  color: #000;
  text-align: center;
  display: block;
  position: relative;
  z-index: 1;
}

.icon:before,
.icon:after {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #1fbace;
  transition: all 0.2s linear;
  z-index: 0;
}

.icon:before {
  transform: rotate(60deg);
}

.icon:after {
  transform: rotate(-60deg);
}

.icon:hover,
.icon:hover:before,
.icon:hover:after {
  background: #bbb;
}

/* クラスをバインドして切り替え */
.rock {
  border: 3px solid red;
  background: white;
}
.scissors {
  border: 3px solid green;
  background: white;
}
.paper {
  border: 3px solid yellow;
  background: white;
}
</style>
