<template>
  <div style="max-width:400px;margin:100px auto;padding:40px;border:1px solid #ddd;border-radius:16px;font-family:system-ui">
    <h2 style="text-align:center">后台登录</h2>
    <div v-if="error" style="color:red;text-align:center">账号或密码错误</div>
    <form @submit.prevent="login">
      <div style="margin-bottom:16px">
        <label style="display:block;font-weight:600;margin-bottom:4px">账号</label>
        <input v-model="username" placeholder="请输入账号" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px" />
      </div>
      <div style="margin-bottom:16px">
        <label style="display:block;font-weight:600;margin-bottom:4px">密码</label>
        <input v-model="password" type="password" placeholder="请输入密码" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px" />
      </div>
      <button type="submit" style="width:100%;background:#3b9eff;color:#fff;border:none;padding:12px;border-radius:30px;font-size:16px;cursor:pointer">
        登录
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: false
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '123456') {
        this.error = false;
        this.$router.push('/admin/dashboard');
      } else {
        this.error = true;
      }
    }
  }
};
</script>