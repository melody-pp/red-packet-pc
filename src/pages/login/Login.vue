<template>
  <div class="login-form">
    <div class="title">
      用户登录
    </div>
    <div class="labelInput" style="margin-top: 17%;">
      <label>用户名</label>
      <input v-model="userName">
    </div>
    <div class="labelInput">
      <label>密码</label>
      <input type="password" v-model="password">
    </div>
    <div class="loginBtn">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { enCode } from '../../utils'

  export default {
    name: 'login',
    data () {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      login () {
        if (enCode(this.userName) !== 92668751 || enCode(this.password) !== 607656967) {
          return
        }

        this.$store.commit('login')
        this.$router.push('/prepare')
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-form {
    width: 30%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    .labelInput {
      width: 50%;
      margin: 4vh auto;
      label {
        display: block;
        font-size: 1.2vw;
        text-align: left;
        margin-bottom: 1.4vh;
      }
      input {
        width: 100%;
        height: 4.5vh;
        line-height: 4.5vh;
        font-size: 1vw;
        cursor: text;
      }
    }

    .loginBtn {
      width: 50%;
      margin: 0 auto;
      text-align: left;
      button {
        background-color: #928f8f;
        border: none;
        color: #fff;
        font-size: 1vw;
        padding: 0.9vh 1.3vw;
        cursor: pointer;
      }
    }
  }
</style>
