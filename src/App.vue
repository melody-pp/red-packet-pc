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
</style>
