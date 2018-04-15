<template>
  <div class="shaking clearfix">
    <div class="ewm fl">
      <img src="../../assets/ewmB.png" class="ewmImg">
      <p>扫描关注二维码</p>
    </div>
    <div class="hand fr">
      <img src="../../assets/hand.png" class="handImg animated shakingIn">
      <p>用力摇 抢红包</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Shaking',
    methods: {
      stop (event) {
        if (event.keyCode === 79) {
          this.axios.post('/rockend')
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

<style scoped lang="scss">
  .shaking {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 50vw;
    height: 46vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 6vh 5vw 2vh;
    > div {
      width: 46%;
      text-align: center;
      color: #fff;
      font-size: 1vw;
      .ewmImg {
        width: 70%;
      }
      .handImg {
        width: 60%;
        margin-top: 2vh;
      }
    }
  }

  .animated {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  @keyframes shakingIn {
    from {
      transform: rotateZ(0deg);
    }

    50% {
      transform: rotateZ(10deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }

  .shakingIn {
    animation-name: shakingIn;
  }

</style>
