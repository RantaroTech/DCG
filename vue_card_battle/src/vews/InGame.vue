<template>
  <div>
    <Base/>
    <div class="btn" @click="goInGame()">リザルトへ</div>
    <div class="reset_btn" @click="reset()">リセット</div>
  </div>
</template>

<script>
import Base from "@/components/4_templates/Base.vue";
import { mapState } from "vuex";

export default {
  components: {
    Base
  },
  computed: {
    ...mapState(["userModule"])
  },
  methods: {
    goInGame: function() {
      this.$router.push("result");
    },
    reset: function() {
      this.$store.dispatch("userModule/roundEndCard");
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

.reset_btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 50px;
  background: green;
}
</style>
