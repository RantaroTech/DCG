<template>
  <div class="card_content" :class="card_data.name">
    <!-- グー -->
    <div class="img_box">
      <img class="card_img" v-if="card_data.name==='rock'" src="../../../assets/rock.png">
    </div>
    <div class="icon_box" v-if="card_data.name==='rock'">
      <cardIcon class="mark" :catd_type="card_data.name"></cardIcon>
    </div>
    <!-- チョキ -->
    <div class="img_box" v-if="card_data.name==='scissors'">
      <img class="card_img" src="../../../assets/scissors.png">
    </div>

    <div class="icon_box" v-if="card_data.name==='scissors'">
      <cardIcon class="mark" :catd_type="card_data.name"></cardIcon>
    </div>
    <!-- パー -->
    <div class="img_box" v-if="card_data.name==='paper'">
      <img class="card_img" src="../../../assets/paper.png">
    </div>
    <div class="icon_box" v-if="card_data.name==='paper'">
      <cardIcon class="mark" :catd_type="card_data.name"></cardIcon>
    </div>
    <slot/>
    <div class="atack_num">{{card_data.atack}}</div>
  </div>
</template>

<script>
import cardIcon from "@/components/1_atoms/cardIcon";
export default {
  components: {
    cardIcon
  },
  props: {
    card_data: {
      name: { type: String, default: null },
      atack: { type: Number, default: 0 },
      is_show: { type: Boolean, default: true }
    }
  },
  created() {
    console.info(this.card_data);
  },
  computed: {},
  methods: {}
};
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

/* クラスをバインドして切り替え */
.rock {
  border: 3px solid red;
  background: #f16a60;
}
.scissors {
  border: 3px solid green;
  background: #0fe618;
}
.paper {
  border: 3px solid blue;
  background: #04b1ffd9;
}
</style>
