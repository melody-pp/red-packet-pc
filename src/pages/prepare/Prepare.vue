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
        <img v-for="user of userList" :src="user.userthumb" class="headPic animated paste">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Prepare',
    data: () => ({
      userList: []
    }),
    methods: {
      start (event) {
        if (event.keyCode === 83) {
          this.$router.push('countdown')
        }
      },
      getUser () {
        const $avatar = document.querySelector('.avatar')

        this.axios.post('/get_canyuren').then(data => {
          this.userList.push(...data.data.filter(item => this.userList.every(user => user.userId !== item.userId)))
          setTimeout(() => {
            if ($avatar.scrollTop !== $avatar.scrollHeight) {
              $avatar.scrollTop += window.innerWidth / 100 * 2
            }
          })

          if (location.href.endsWith('prepare')) {
            this.getUser()
          }
        })
      }
    },
    mounted () {
      this.getUser()
      this.start = this.start.bind(this)

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
      margin: 2vw;
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
      height: 2vw;
      line-height: 2vw;
      margin-bottom: 1vw;
    }
  }

  .participation {
    width: 18vw;
    background-color: rgba(0, 0, 0, 0.4);
    .title {
      text-align: center;
    }
    .avatar {
      height: 28vw;
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
