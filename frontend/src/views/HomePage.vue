<template>
  <div>
    <!-- ===== Logo 入场动画（全屏遮罩） ===== -->
    <div v-if="showIntro" class="intro-overlay">
      <img src="@/assets/logo.png" alt="晖格科技" class="intro-logo" />
    </div>

    <!-- ===== 主页面内容 ===== -->
    <div v-else>
      <!-- Banner -->
      <section class="banner">
        <div class="banner-content">
          <h1 class="banner-title">{{ config.title }}</h1>
          <p class="banner-sub">{{ config.subtitle }}</p>
          <router-link to="/solution" class="banner-btn">了解我们的方案</router-link>
        </div>
      </section>

      <!-- 三个板块入口 -->
      <section class="section">
        <div class="container">
          <h2 class="section-title">全流程解决方案</h2>
          <p class="section-sub">从筛查到干预，构建校园心理安全防护体系</p>
          <div class="card-grid">
            <!-- 检测 -->
            <div class="card" @click="$router.push('/detect')">
              <div class="card-icon">🔬</div>
              <h3>{{ config.modules[0].title }}</h3>
              <p>{{ config.modules[0].desc }}</p>
              <span class="card-link">了解更多 →</span>
            </div>
            <!-- 监测 -->
            <div class="card" @click="$router.push('/monitor')">
              <div class="card-icon">📹</div>
              <h3>{{ config.modules[1].title }}</h3>
              <p>{{ config.modules[1].desc }}</p>
              <span class="card-link">了解更多 →</span>
            </div>
            <!-- 疗愈 -->
            <div class="card" @click="$router.push('/heal')">
              <div class="card-icon">🧠</div>
              <h3>{{ config.modules[2].title }}</h3>
              <p>{{ config.modules[2].desc }}</p>
              <span class="card-link">了解更多 →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIntro: true,
      config: {
        title: 'AI赋能心理守护，智慧护航心灵安康',
        subtitle: '全流程AI身心健康解决方案 · 检测 · 监测 · 疗愈',
        modules: [
          { title: '检测', desc: '非接触式视频分析，30秒快速识别情绪状态' },
          { title: '监测', desc: '7×24小时行为监测，主动预警风险事件' },
          { title: '疗愈', desc: '沉浸式心理干预，科学疏导负面情绪' }
        ]
      }
    }
  },
  mounted() {
    // 2.5秒后进入主页面，并加载配置
    setTimeout(() => {
      this.showIntro = false
      this.loadConfig()
    }, 2500)
  },
  methods: {
    async loadConfig() {
      try {
        const res = await fetch('http://localhost:3000/api/config/homepage')
        if (res.ok) {
          const data = await res.json()
          this.config = data
        }
      } catch (e) {
        console.log('加载配置失败，使用默认值')
      }
    }
  }
}
</script>

<style scoped>
/* ===== Logo 入场动画 ===== */
.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0a2a44;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeOut 1.2s ease 1.8s forwards;
}

.intro-logo {
  width: 200px;
  height: auto;
  animation: glowPulse 1.5s ease-in-out;
}

@keyframes glowPulse {
  0% {
    opacity: 0.4;
    transform: scale(0.92);
    filter: drop-shadow(0 0 0 rgba(59, 158, 255, 0));
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
    filter: drop-shadow(0 0 40px rgba(59, 158, 255, 0.5));
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: drop-shadow(0 0 20px rgba(59, 158, 255, 0.2));
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

/* ===== Banner ===== */
.banner {
  padding-top: 80px;
  background: linear-gradient(135deg, #0a2a44 0%, #1a4a7a 100%);
  color: #fff;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  max-width: 800px;
  padding: 60px 24px;
}

.banner-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
}

.banner-sub {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
}

.banner-btn {
  display: inline-block;
  background: #3b9eff;
  color: #fff;
  padding: 14px 40px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.banner-btn:hover {
  background: #1e7fd6;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 158, 255, 0.4);
}

/* ===== 三个板块 ===== */
.section {
  padding: 64px 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 8px;
}

.section-sub {
  text-align: center;
  color: #64748b;
  font-size: 17px;
  margin-bottom: 44px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.card {
  background: #ffffff;
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #eef2f6;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #3b9eff;
  box-shadow: 0 12px 40px rgba(59, 158, 255, 0.12);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 6px;
}

.card p {
  color: #475569;
  font-size: 15px;
  margin-bottom: 4px;
}

.card-link {
  display: inline-block;
  margin-top: 16px;
  color: #3b9eff;
  font-weight: 600;
  font-size: 14px;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
  .banner-title {
    font-size: 32px;
  }
  .banner-sub {
    font-size: 17px;
  }
  .intro-logo {
    width: 140px;
  }
}
</style>