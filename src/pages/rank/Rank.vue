<template>
  <div class="model">
    <img class="rankTitle" src="../../assets/rankTitle.png">
    <div class="rankBox">
      <div class="rankItem" v-for="(user, index) of userList"
           :class="{t1:index===0,t2:index===1, t3: index===2}">
        <div class="rank">
          <div class="rankText" v-if="index>2">
            第{{index+1}}名
          </div>
          <img class="rankImg" v-else :src="rankImgs[index]">
        </div>
        <div class="headPicBox">
          <img :src="user.userthumb" class="headPic">
        </div>
        <div class="nickName">{{user.username}}</div>
        <div class="money">获得红包{{user.money}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    data: () => ({
      userList: [],
      rankImgs: [
        require('../../assets/top1.png'),
        require('../../assets/top2.png'),
        require('../../assets/top3.png')
      ]
    }),
    mounted () {
      this.axios.post('/get_tenren').then(data => {
        this.userList = data.data
      })
    }
  }
</script>

<style scoped lang="scss">
  .model {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .rankBox {
      top: 57%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40vw;
      height: 62vh;
      padding: 6vh 4vw;
      overflow-y: auto;
      overflow-x: hidden;
      border: 8px solid #cca406;
      background-color: #ff4433;
      position: absolute;

    }

    .rankTitle {
      position: absolute;
      width: 28vw;
      top: 19%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }

    .rankItem {
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      padding: 0 3vw;
      margin-bottom: 1.2vh;
      font-size: 0.7vw;
      > div, > img {
        display: inline-block;
        vertical-align: middle;
      }
      .headPicBox {
        width: 5vw;
        text-align: right;
        .headPic {
          width: 1.6vw;
          border-radius: 50%;
        }
      }

      .rank {
        width: 7vw;
        text-align: center;
      }

      .rankText {
        color: #fff48d;
      }

      .nickName {
        color: #f4e1a1;
        width: 14vw;
        margin-left: 0.8vw;
      }

      .money {
        color: #ffc600;
      }
    }

    .rankItem.t1 {
      .headPic {
        width: 2.2vw;
        border-radius: 50%;
      }

      .rankImg {
        width: 2.8vw;
      }

      .nickName {
        font-size: 0.8vw;
      }

      .money {
        font-size: 0.8vw;
      }
    }
    .rankItem.t2 {

      .headPic {
        width: 2vw;
        border-radius: 50%;
      }

      .rankImg {
        width: 2.4vw;
      }

      .nickName {
        font-size: 0.8vw;
      }

      .money {
        font-size: 0.8vw;
      }
    }
    .rankItem.t3 {
      .headPic {
        width: 1.8vw;
        border-radius: 50%;
      }
      .rankImg {
        width: 2vw;
      }

      .nickName {
        font-size: 0.8vw;
      }

      .money {
        font-size: 0.8vw;
      }
    }
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    50% {
      opacity: 1;
    }
  }

  .zoomIn {
    animation-name: zoomIn;
  }
</style>
