<template>
  <div>
    <Base/>
    <div class="btn" @click="goInGame()">リザルトへ</div>
  </div>
</template>

<script>
import Base from "@/components/4_templates/Base.vue";

export default {
  components: {
    Base
  },
  methods: {
    goInGame: function() {
      this.$router.push("result");
    }
  }
};
</script>

<style scoped>
.btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 50px;
  background: red;
}
</style>
