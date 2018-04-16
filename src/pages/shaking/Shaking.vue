<template>
  <div class="shaking">
    <div class="shakeBox">
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
        timerId: null,
        userList: [],
        redPacketImgs: [
          require('../../assets/hb_1.png'),
          require('../../assets/hb_2.png')
        ]
      }

    },
    methods: {
      stop (event) {
        if (event.keyCode === 79) {
          this.axios.post('/rockend')
          this.$router.push('/rank')
        }
      },
      addRedPacket () {
        const $shaking = document.querySelector('.shaking')
        const redPacket = document.createElement('img')
        redPacket.src = this.redPacketImgs[Math.floor(Math.random() * 2)]
        redPacket.style.width = Math.floor(Math.random() * 40) + 20 + 'px'
        redPacket.style.position = 'absolute'
        redPacket.style.left = Math.floor(Math.random() * window.innerWidth) - 60 + 'px'
        redPacket.className = 'red-packet'

        $shaking.appendChild(redPacket)
        setTimeout(() => $shaking.removeChild(redPacket), 4000)
      },
      getUserList () {
        this.axios.post('/get_hongbaoren').then(data => {
          this.userList = data.data
        })
      }
    },
    created () {
      this.stop = this.stop.bind(this)
      this.addRedPacket = this.addRedPacket.bind(this)
    },
    mounted () {
      this.getUserList()
      document.addEventListener('keydown', this.stop)
      this.timerId = setInterval(this.addRedPacket, 300)
    },
    beforeDestroy () {
      clearInterval(this.timerId)
      document.removeEventListener('keydown', this.stop)
    }
  }
</script>

<style scoped lang="scss">
  .shakeBox {
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 40vw;
    height: 46vh;
    overflow: auto;
    position: absolute;
    padding: 4vh 5vw;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    .winnerBox {
      height: 46vh;
      overflow: auto;
      .winnerItem {
        color: #ffc600;
        font-size: 1.2vw;
        padding: 0.6vh 3vw;
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
