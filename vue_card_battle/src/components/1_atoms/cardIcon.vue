<template>
  <div class="icon_box">
    <div class="icon"></div>
    <div class="mark" v-if="this.catd_type==='rock'">
      <img class="icon_img" src="../../../assets/img/ui/rock.png">
    </div>
    <div class="mark" v-if="this.catd_type==='scissors'">
      <img class="icon_img" src="../../../assets/img/ui/scissors.png">
    </div>
    <div class="mark" v-if="this.catd_type==='paper'">
      <img class="icon_img" src="../../../assets/img/ui/paper.png">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    catd_type: {
      type: String,
      default: null
    }
  },
  components: {},
  created() {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.icon_box {
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
  position: sticky;
  margin-left: -22px;
  margin-top: 16px;
  background: #1fbace;
  transition: all 0.2s linear;
}
.icon_img {
  width: 35px;
  height: 35px;
  position: relative;
  top: 12px;
  left: -12px;
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

.mark {
  position: absolute;
  top: 0px;
  left: -2px;
}
</style>
