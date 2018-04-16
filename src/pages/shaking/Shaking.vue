<template>
  <div class="shaking">
    <div class="shakBox">
      <div class="winnerBox">
        <div class="winnerItem animated fadeIn" v-for="(user, index) of userList">
          <div class="winner">恭喜</div>
          <img :src="user.userthumb" class="headPic">
          <div class="nickName">{{user.username}}</div>
          <div class="money">获得红包</div>
        </div>
      </div>
    </div>

    <img src="../../assets/hand.png" class="handImg animatedS shakingIn">

  </div>
</template>

<script>
  export default {
    name: 'Shaking',
    data () {
      return {
        userList: []
      }

    },
    methods: {
      stop (event) {
        if (event.keyCode === 79) {
          this.axios.post('/rockend')
          this.$router.push('/rank')
        }
      },
      getUserList () {
        this.axios.post('/get_hongbaoren').then(data => {
          this.userList = data.data
        })
      }
    },
    mounted () {
      this.stop = this.stop.bind(this)
      document.addEventListener('keydown', this.stop)
      this.getUserList()
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.stop)
    }
  }
</script>

<style scoped lang="scss">
  .shakBox {
    padding: 6vh 5vw 2vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 40vw;
    height: 46vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .winnerBox {

      .winnerItem {
        padding: 0.6vh 3vw;
        color: #ffc600;
        font-size: 1.2vw;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        > div, > img {
          display: inline-block;
          vertical-align: middle;
        }
        .nickName {
          width: 16vw;
          color: #fff;
        }
        .headPic {
          width: 2.2vw;
          border-radius: 50%;
          margin-left: 6vw;
          margin-right: 1vw;
        }

      }

    }
  }

  .handImg {
    width: 16vw;
    position: absolute;
    right: 5vw;
    bottom: 3vh;
  }

  .animatedS {
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
