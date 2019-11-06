<template>
  <div class="login-wrapper">
    <div class="login-box">
      <el-form ref="login_form" :model="loginForm">
        <!-- <img src="../../../../ui/login.png" alt=""> -->
        <div class="top-box">
          <h1>
            <span class="coffee">
              <img src="../../static/logo/coffee.png" alt=""> luckin coffee
            </span>
            <span class="and">&</span>
            <span class="ucar"><img src="../../static/logo/ucar.png" alt=""></span>
          </h1>
          <p class="font">欢迎使用企业文化案例评选系统</p>
          <el-form-item>
            <el-select v-model="loginForm.role" placeholder="请选择角色">
              <el-option label="咖啡员工" value="lucky"></el-option>
              <el-option label="优车员工" value="ucar"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" placeholder="请输密码"></el-input>
          </el-form-item>
        </div>
        <div class="bottom-box">
          <el-button>登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        role: '',
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper::after {
  content: '';
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #4d7193;
}
.login-wrapper .login-box {
  width: 500px;
  position: relative;
  z-index: 1;
  border-radius: 2px;
  overflow: hidden;
}
.login-wrapper .login-box .top-box {
  background: #2b4e6e;
  padding: 50px 50px 30px 50px;
}
.login-wrapper .login-box .top-box h1,
.login-wrapper .login-box .top-box p {
  color: #fff;
}
.login-wrapper .login-box .top-box h1 span {
  display: flex;
  align-items: flex-end;
}
.login-wrapper .login-box .top-box h1 {
  font-size: 1.4em;
  margin: 0 0 10px 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.login-wrapper .login-box .top-box h1 .coffee img{
  height: 40px;
  width: 40px;
  margin-right: 5px;
}
.login-wrapper .login-box .top-box h1 .and {
  margin: 0 10px;
  font-size: .9em;
}
.login-wrapper .login-box .top-box h1 .ucar img {
  height: 30px;
}
.login-wrapper .login-box .top-box p {
  font-size: .8em;
  margin-bottom: 40px;
}
.login-wrapper .login-box .bottom-box {
  background: #335a7e;
  padding: 40px 50px 50px 50px;
}
.login-wrapper .login-box .bottom-box button {
  width: 100%;
}
.login-wrapper .login-box >>> input {
  background: transparent;
  border-radius: 0;
  border-color: #fff;
  color: #fff;
}
.login-wrapper .login-box >>> button {
  border-radius: 0;
}
.login-wrapper .login-box >>> .el-select {
  display: block;
}
.login-wrapper .login-box >>> .el-input.is-focus input {
  border-color: #fff;
}
</style>
