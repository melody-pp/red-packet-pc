<template>

</template>

<script>
  export default {
    name: 'Shaking',
    methods: {
      stop (event) {
        if (event.keyCode === 79) {
          this.$router.push('/rank')
        }
      },
    },
    mounted () {
      this.stop = this.stop.bind(this)
      document.addEventListener('keydown', this.stop)
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.stop)
    }
  }
</script>

<style scoped>

</style>
