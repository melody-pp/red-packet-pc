<template>

</template>

<script>
  export default {
    name: 'Shaking',
    mounted () {
      setTimeout(() => {
        this.$router.push('/rank')
      }, 5000)
    }
  }
</script>

<style scoped>

</style>
