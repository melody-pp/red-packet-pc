<template>
  <div class="model">
    <div class="rankBox">
      <img class="rankTitle" src="../../assets/rankTitle.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Rank'
  }
</script>

<style scoped lang="scss">
  .model {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .rankBox {
      border: 8px solid #cca406;
      background-color: #ff4433;
      position: relative;
      width: 50%;
      height: 68%;
      top: 56%;
      left: 50%;
      transform: translate(-50%, -50%);
      .rankTitle {
        position: absolute;
        width: 70%;
        top: -1%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }


</style>
