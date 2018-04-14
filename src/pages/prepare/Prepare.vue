<template>
  <div class="prepare clearfix">
    <div class="ewm fl">
      <div class="title">
        使用微信扫描以下二维码，关注后回复“红包雨”点击链接参加抢红包活动
      </div>

      <div class="ewmImg">
        <img src="../../assets/ewmB.png" class="big">
        <img src="../../assets/ewmB.png" class="middle">
        <img src="../../assets/ewmB.png" class="small">
      </div>

      <div class="footer">无法扫描二维码的用户，请关注微信公众号：zotyeauto2013</div>
    </div>

    <div class="participation fr">
      <div class="title">
        <span class="num">{{userList.length}}</span>人已参与
      </div>

      <div ref="avatar" class="avatar">
        <template v-for="user of userList">
          <transition enter-active-class="animated paste">
            <img :src="user.headPic" class="headPic">
          </transition>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Prepare',
    data: () => ({
      userList: [
        {headPic: 'http://img2.imgtn.bdimg.com/it/u=3802506693,1778634825&fm=27&gp=0.jpg'},
      ]
    }),
    methods: {
      start (event) {
        console.log(event.keyCode)
        if (event.keyCode === 83) {
          this.$router.push('countdown')
        }
      }
    },
    mounted () {
      this.start = this.start.bind(this)
      // const $avatar = document.querySelector('.avatar')
      // setInterval(() => {
      //   this.userList.push({headPic: 'http://img2.imgtn.bdimg.com/it/u=3802506693,1778634825&fm=27&gp=0.jpg'})
      //   this.$nextTick(() => {
      //     $avatar.scrollTop = $avatar.scrollHeight
      //   })
      // }, 500)
      document.addEventListener('keydown', this.start)
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.start)
    }
  }
</script>

<style scoped lang="scss">
  .prepare {
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 87.5vw;
    position: absolute;
  }

  .ewm {
    width: 67vw;
    background-color: rgba(0, 0, 0, 0.4);

    .title {
      text-indent: 4vw;
    }

    img {
      vertical-align: bottom;
      margin: 5vh 2vw;
    }

    .big {
      margin-left: 4vw;
      width: 21vw;
    }
    .middle {
      width: 16vw;
    }
    .small {
      width: 12vw;
    }

    .footer {
      margin-left: 4vw;
      font-size: 1.2vw;
      color: #fff;
      height: 5vh;
      line-height: 5vh;
      margin-bottom: 2vh;
    }
  }

  .participation {
    width: 18vw;
    background-color: rgba(0, 0, 0, 0.4);
    .title {
      text-align: center;
    }
    .avatar {
      height: 66vh;
      overflow: auto;
    }
    .headPic {
      width: 3vw;
      float: left;
      margin: 15px;
      border-radius: 50%;
    }
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes paste {
    from {
      opacity: 0;
      transform: scale3d(2, 2, 2);
    }

    50% {
      opacity: 1;
    }
  }

  .paste {
    animation-name: paste;
  }
</style>
