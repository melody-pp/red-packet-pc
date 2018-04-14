<template>
  <div class="model">
    <div class="rankBox animated zoomIn">
      <img class="rankTitle" src="../../assets/rankTitle.png">
      <div class="rankItem" v-for="(user, index) of userList">
        <div class="rank" v-if="index>2">
          第{{index+1}}名
        </div>
        <img class="rankImg" v-else :src="rankImgs[index]">
        <img :src="user.headPic" class="headPic">
        <div class="nickName">{{user.nickName}}</div>
        <div class="money">获得红包{{user.money}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Rank',
    data: () => ({
      userList: [
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },
        {
          headPic: 'http://img3.imgtn.bdimg.com/it/u=3057512949,2471002942&fm=27&gp=0.jpg',
          nickName: '屎壳螂',
          money: '100'
        },

      ],
      rankImgs: [
        require('../../assets/top1.png'),
        require('../../assets/top2.png'),
        require('../../assets/top3.png')
      ]
    })
  }
</script>

<style scoped lang="scss">
  .model {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .rankBox {
      padding-top: 5vh;
      border: 8px solid #cca406;
      background-color: #ff4433;
      position: relative;
      width: 50vw;
      height: 63vh;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);

      .rankTitle {
        position: absolute;
        width: 35vw;
        top: -1%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .rankItem {
      > div, > img {
        display: inline-block;
      }
      .headPic {
        width: 3vw;
        border-radius: 50%;
      }
      .nickName {

      }
      .money {
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
