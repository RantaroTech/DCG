<template>
  <div class="hello">test</div>
</template>

<script>
export default {
  data () {
    return {
      age: '',
      address: ''
    }
  },
  methods: {
    check () {
      alert('Your age is ' + this.age + '\nYour address is ' + this.address)
    }
  }
}
</script>

<style scoped>
</style>
