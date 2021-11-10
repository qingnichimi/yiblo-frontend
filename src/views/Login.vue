<template>
  <el-form ref="loginForm" :model="loginForm" :rules="rules" class="loginContainer" :loading="loading">
      <h3 class="loginTitle">登录</h3>
      <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" @input="onInput()"></el-input>
      </el-form-item>
      <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" @input="onInput()"></el-input>
      </el-form-item>
      <el-form-item prop="code">
          <el-input type="text" v-model="loginForm.code" placeholder="请输入验证码" style="width: 200px" @input="onInput()"></el-input>
          <img :src="vcUrl" @click="updateVerifyCode">
      </el-form-item>
      <el-form-item >
          <el-checkbox :checked="checked" class="loginRemember">记住我</el-checkbox>
      </el-form-item>
      <el-form-item >
          <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
import { postRequest } from '../utils/api'
export default {
    name: 'Login',
    data () {
        return {
            vcUrl: '',
            loginForm: {
                username: '',
                password: '',
                code: ''
            },
            checked: true,
            loading: false,
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
            }
        }
    },
    methods: {
        onInput: function () {
            this.$forceUpdate()
        },
        updateVerifyCode: function () {
            // 请求地址
        },
        submitLogin: function () {
            // 请求方法
            this.loading = true
            postRequest('/doLogin', {
                username: this.loginForm.username,
                password: this.loginForm.password
            }).then(resp => {
                this.loading = false
                if (resp) {
                    console.log(resp)
                    localStorage.setItem('token', resp.data.data.tokenHead + resp.data.data.token)
                    console.log(resp.data.data.tokenHead + resp.data.data.token)
                    this.$router.replace('/admin/home')
                } else {
                    alert(resp.data.message)
                }
            })
        }
    }
}
</script>

<style>
.loginContainer{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px sloid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .loginTitle{
        margin: 0px auto 40px auto;
        text-align: center;
    }
    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }
    .el-form-item__content{
        display: flex;
        align-items: center;
    }
</style>
