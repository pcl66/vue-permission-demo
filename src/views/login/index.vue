<template>
  <div class="main">
    <div class="login-form">
      <el-form ref="loginFormRef" :model="form" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model.trim="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="hClick">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    hClick(val) {
      console.log('点击了登录', val)
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 50%;
    height: 50%;
    padding: 20px;
    border: 1px dashed brown;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::v-deep .el-form {
      width: 80%;
      & .el-form-item:last-child {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
