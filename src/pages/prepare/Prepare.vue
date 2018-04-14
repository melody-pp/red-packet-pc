<template>
  <div class="prepare clearfix">
    <div class="ewm fl">
      <div class="title" style="padding-left: 4%;">使用微信扫描以下二维码，关注后回复“红包雨”点击链接参加抢红包活动</div>
      <div class="ewmImg">
        <img src="../../assets/ewmB.png" style="width:34%!important;margin-left: 4%;">
        <img src="../../assets/ewmM.png" alt="">
        <img src="../../assets/ewmS.png" alt="">
      </div>

      <div class="footer">无法扫描二维码的用户，请关注微信公众号：zotyeauto2013</div>
    </div>
    <div class="participation fr">
      <div class="title">
        <span class="num">348</span>人已参与
      </div>
      <div class="avatar">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Prepare'
  }
</script>

<style scoped lang="scss">
  .prepare {
    position: absolute;
    width: 87%;
    height: 70vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .ewm {
      width: 78%;
      background-color: rgba(0, 0, 0, 0.4);
      img {
        vertical-align: bottom;
        margin: 3.4% 2%;
      }
      .footer {
        margin-left: 4%;
        font-size: 1vw;
        color: #fff;
      }
    }
    .participation {
      width: 20%;
      background-color: rgba(0, 0, 0, 0.4);
      .avatar {
        height: 40%;
      }

    }
  }

</style>
