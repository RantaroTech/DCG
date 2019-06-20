<template>
  <div>
    <form-a/>
    <form-b/>
  </div>
</template>

<script>
// import Test from '@/components/Test.vue'
import FormA from "./FormA.vue";
import FormB from "./FormB.vue";
export default {
  name: "HelloWorld",
  components: {
    FormA,
    FormB
  },
  data() {}
};
</script>

<style scoped>
</style>
