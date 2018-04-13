<template>
  <div class="login-form">
    <div class="title">
      用户登录
    </div>
    <div>
      <label>用户名</label>
      <input v-model="userName">
    </div>
    <div>
      <label>密码</label>
      <input type="password" v-model="password">
    </div>
    <div>
      <button @click="login">登录</button>
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

<style scoped>
  .login-container {
    color: #fff;
    width: 300px;
    padding: 20px 50px;
    margin: 10% auto;
    background: rgba(0, 0, 0, .4);
  }
</style>
