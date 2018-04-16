<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { getUrlParams } from './utils'

  export default {
    name: 'App',
    created () {
      const urlParms = getUrlParams(location)

    }
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-image: url("./assets/pic_01.jpg");
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .title {
    font-size: 1.4vw;
    height: 8vh;
    line-height: 8vh;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  .red-packet {
    animation-duration: 5s;
    animation-fill-mode: both;
    animation-name: redPacket;
  }

  @keyframes redPacket {
    from {
      top: 0;
      opacity: .8;
    }

    to {
      top: 90vh;
      opacity: .5;
    }
  }

</style>
