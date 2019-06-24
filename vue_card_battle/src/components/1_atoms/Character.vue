<template>
  <div>
    <img
      v-if="this.character_id === 1"
      style="width: 120px;height: 120px;"
      src="../../../assets/img/content/avater/character1.png"
    >
    <img
      v-if="this.character_id === 2"
      style="width: 120px;height: 120px;"
      src="../../../assets/img/content/avater/character2.png"
    >
    <slot/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    character_id: {
      type: Number,
      default: null
    }
  },
  computed: {},
  methods: {
    // getSrc: function() {
    //   const test = "../../../assets/character" + this.character_id + ".png";
    //   console.log(test);
    //   return test;
    // }
  }
};
</script>

<style scoped>
</style>
