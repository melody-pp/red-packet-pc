<template>
  <div class="container">
    <div class="circleProgress_wrapper">
      <div class="wrapper right">
        <div class="circleProgress rightcircle"></div>
      </div>
      <div class="wrapper left">
        <div class="circleProgress leftcircle"></div>
      </div>
    </div>
    <div class="count">{{count}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Countdown',
    data: () => ({
      count: 5,
      timer: null,
    }),
    mounted () {
      this.timer = setInterval(() => {
        this.count--
      }, 1000)

      setTimeout(() => {
        this.$router.push('/shaking')
      }, 5900)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 100vw;
    height: 100vh;
  }

  .count {
    color: #fff;
    font-size: 5vw;
    font-weight: 700;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .circleProgress_wrapper {
    width: 12vw;
    height: 12vw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .wrapper {
    top: 0;
    width: 6vw;
    height: 12vw;
    overflow: hidden;
    position: absolute;
  }

  .right {
    right: 0;
  }

  .left {
    left: 0;
  }

  .circleProgress {
    top: 0;
    width: 10vw;
    height: 10vw;
    border: 1vw solid transparent;
    border-radius: 50%;
    position: absolute;
  }

  .rightcircle {
    border-top: 1vw solid #fff;
    border-right: 1vw solid #fff;
    right: 0;
    -webkit-animation: circleProgressLoad_right 6s linear;
  }

  .leftcircle {
    border-bottom: 1vw solid #fff;
    border-left: 1vw solid #fff;
    left: 0;
    -webkit-animation: circleProgressLoad_left 6s linear;
  }

  @-webkit-keyframes circleProgressLoad_right {
    0% {
      -webkit-transform: rotate(45deg);
    }
    50%, 100% {
      -webkit-transform: rotate(225deg);
    }
  }

  @-webkit-keyframes circleProgressLoad_left {
    0%, 50% {
      -webkit-transform: rotate(45deg);
    }
    100% {
      -webkit-transform: rotate(225deg);
    }
  }
</style>
