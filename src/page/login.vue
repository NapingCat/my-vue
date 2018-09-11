<template>
  <div class="logindiv">
    账号：<el-input v-model="username" placeholder="请输入账号" class="logininput" clearable></el-input><br/>
    密码：<el-input v-model="password" placeholder="请输入密码" class="logininput" type = 'password' clearable></el-input><br/>
    <el-button type="primary" @click="login(username,password)" class="loginbtn">登陆</el-button>
    <el-button @click="logincancel" class="loginbtn">取消</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login (username, password) {
      if (username === 'admin' && password === '123') {
        this.$message({
          showClose: true,
          message: '欢迎{{username}}使用本系统！',
          type: 'success'
        })
        this.$router.push('homeMenu')
      } else {
        this.$message({
          showClose: true,
          message: '账户名称或密码错误！',
          type: 'error'
        })
      }
    },
    logincancel () {
      this.username = ''
      this.password = ''
      this.$message({
        showClose: true,
        message: '注意：您已取消登陆！',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.logindiv{
  height: 300px;
  width: 400px;
  margin: 100px auto;
}
  .logininput{
    width: 200px;
    margin-top: 10px;
  }
  .loginbtn{
    width: 250px;
    margin: 10px auto;
  }
</style>
