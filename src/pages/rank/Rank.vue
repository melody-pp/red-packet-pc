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
        <img :src="user.userthumb" class="headPic">
        <div class="nickName">{{user.username}}</div>
        <div class="money">获得红包{{user.money}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Rank',
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
      border: 8px solid #cca406;
      background-color: #ff4433;
      position: relative;
      width: 40vw;
      height: 70vh;
      top: 57%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1vw 4vw;
      overflow: auto;
    }

    .rankTitle {
      position: absolute;
      width: 32vw;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }

    .rankItem {
      border-bottom: 1px solid #fbf4d7;
      padding: 0 3vw;
      margin-bottom: 1.2vh;
      > div, > img {
        display: inline-block;
        vertical-align: middle;
      }

      .headPic {
        width: 2.2vw;
        border-radius: 50%;
        margin-left: 3vw;
      }
      .rank {
        width: 7vw;
        text-align: center;
      }

      .rankText {
        font-size: 0.8vw;
        color: #fff48d;
      }

      .rankImg {
        width: 2.8vw;
      }
      .rankImg.t2 {
        width: 2.5vw;
      }
      .rankImg.t3 {
        width: 2.2vw;
      }

      .nickName {
        font-size: 0.8vw;
        color: #fcff9e;
      }

      .money {
        font-size: 0.8vw;
        color: #ffb518;
      }
    }

    .rankItem.t1 {
      .headPic {
        width: 2.2vw;
        border-radius: 50%;
        margin-left: 3vw;
      }

      .rankImg {
        width: 2.8vw;
      }

      .nickName {
        font-size: 0.8vw;
        color: #fcff9e;
      }

      .money {
        font-size: 0.8vw;
        color: #ffb518;
      }
    }
    .rankItem.t2 {

      .headPic {
        width: 2.2vw;
        border-radius: 50%;
        margin-left: 3vw;
      }

      .rankImg {
        width: 2.5vw;
      }

      .nickName {
        font-size: 0.8vw;
        color: #fcff9e;
      }

      .money {
        font-size: 0.8vw;
        color: #ffb518;
      }
    }
    .rankItem.t3 {
      .headPic {
        width: 2.2vw;
        border-radius: 50%;
        margin-left: 3vw;
      }
      .rankImg {
        width: 2.2vw;
      }

      .nickName {
        font-size: 0.8vw;
        color: #fcff9e;
      }

      .money {
        font-size: 0.8vw;
        color: #ffb518;
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
