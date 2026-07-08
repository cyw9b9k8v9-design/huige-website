<template>
  <div>
    <!-- 导航栏 -->
    <nav v-if="!isAdminPage" class="navbar">
  <!-- 导航栏内容不变 -->
      <div class="nav-container">
        <div class="nav-logo" @click="$router.push('/')" style="cursor:pointer">
  <img src="@/assets/logo.png" class="logo-img" />
        </div>
        <div class="nav-links">
          <router-link to="/" active-class="active">首页</router-link>
          <router-link to="/detect" active-class="active">AI心理检测</router-link>
          <router-link to="/monitor" active-class="active">动态行为监测</router-link>
          <router-link to="/heal" active-class="active">精准身心疗愈</router-link>
          <router-link to="/service-case" active-class="active">服务案例</router-link>
          <router-link to="/about" active-class="active">关于我们</router-link>
          <router-link to="/contact" active-class="active">联系我们</router-link>
          <!--<router-link to="/admin/login" active-class="active" class="admin-link">后台</router-link>-->
        </div>
      </div>
    </nav>

    <!-- 页面内容 -->
    <router-view />
  </div>
</template>

<script>
export default {computed: {
    isAdminPage() {
      return this.$route.path.startsWith('/admin')
    }
  }
}
</script>

<style scoped>
/* ===== 导航栏 ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #0a2a44 0%, #1a4a7a 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  padding: 12px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ===== Logo ===== */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1);
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
}

/* ===== 导航链接 ===== */
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover {
  color: #ffffff;
  border-bottom-color: #3b9eff;
}

.nav-links a.active {
  color: #ffffff;
  border-bottom-color: #3b9eff;
}

/* ===== 后台入口（低调一些） ===== */
.nav-links .admin-link {
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  border-bottom-color: transparent;
}

.nav-links .admin-link:hover {
  color: rgba(255, 255, 255, 0.7);
  border-bottom-color: transparent;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 8px;
    padding: 8px 16px;
  }
  .nav-links {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .nav-links a {
    font-size: 13px;
  }
  .logo-text {
    font-size: 18px;
  }
  .logo-img {
    height: 32px;
  }
}
</style>