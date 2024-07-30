<template>
  <div class="table">
    <div class="container">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <div class="login-item">
          <div class="loginLeft">
            <h2>欢迎来到苏醒世界</h2>
            <span>丰富自己，远比取悦他人更有意义，</span>
            <span>德不孤，必有邻，</span>
            <span>做更优秀的自己，才能遇到更优秀的别人。</span>
            <div class="pic">
              <img src="@/assets/lakePic.jpg" style=" width: 300px;
  height: 150px;margin-top: 20px;">
            </div>
          </div>
          <div class="loginRight">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
              <el-tab-pane label="账号登录" name="login">
                <el-input v-model="form.name" placeholder="请输入用户名/手机号" />
                <el-input v-model="form.password" type="password" placeholder="请输入密码" />
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <div class="otherChoices">
                  <div class="othterChoices-title">其他方式登录</div>
                  <ul>
                    <li>
                      <div class="iconfont icon-QQ"></div>
                    </li>
                    <li>
                      <div class="iconfont icon-weixin"></div>
                    </li>
                    <li>
                      <div class="iconfont icon-weibo"></div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="注册" name="register">
                <el-input v-model="form.registerName" placeholder="请输入用户名/手机号" />
                <div class="registerCode">
                  <el-input v-model="form.registerCode" type="password" placeholder="请输入验证码" />
                  <el-link type="primary">发送验证码</el-link>
                </div>
                <el-input v-model="form.registerPassword" type="password" placeholder="请输入密码" />
                <el-button type="primary" @click="onSubmit">注册</el-button>
                <p class="agreement">注册即代表同意用户协议</p>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-form>
    </div>
    <div class="square">
      <ul class="donghua">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
const activeName = ref('login')
const form = reactive({
  name: '',
  password: '',
  registerName: '',
  registerCode: '',
  registerPassword: '',
})

</script>


<style scoped></style>