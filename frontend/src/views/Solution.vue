<template>
  <div class="solution-page">
    <!-- 顶部横幅 -->
    <section class="banner">
      <div class="banner-content">
        <h1>全流程AI心理健康闭环解决方案</h1>
        <p>检测 → 监测 → 疗愈，三个模块协同联动，构建校园心理安全防护体系</p>
      </div>
    </section>

    <!-- 流程图区域 -->
    <section class="flow-section">
      <div class="container">
        <div class="flow-wrapper">
          <!-- 检测 -->
          <div class="flow-item" @click="openModal('detect')">
            <div class="flow-image-placeholder">
              <img src="@/assets/jiance.png" alt="检测" />
            </div>
            <h3>检测</h3>
            <p class="flow-product">灵犀「SE」系列</p>
            <p class="flow-desc">非接触式视频分析，30秒快速识别情绪状态</p>
            <span class="flow-tag">第一步 · 筛查</span>
            <div class="click-hint">点击查看详情 →</div>
          </div>

          <div class="flow-arrow">➜</div>

          <!-- 监测 -->
          <div class="flow-item" @click="openModal('monitor')">
            <div class="flow-image-placeholder">
              <img src="@/assets/jiankong.png" alt="监测" />
            </div>
            <h3>监测</h3>
            <p class="flow-product">灵犀「DW」系列</p>
            <p class="flow-desc">7×24小时行为监测，主动预警风险事件</p>
            <span class="flow-tag">第二步 · 预警</span>
            <div class="click-hint">点击查看详情 →</div>
          </div>

          <div class="flow-arrow">➜</div>

          <!-- 疗愈 -->
          <div class="flow-item" @click="openModal('heal')">
            <div class="flow-image-placeholder">
              <img src="@/assets/liaoyu.png" alt="疗愈" />
            </div>
            <h3>疗愈</h3>
            <p class="flow-product">VR训练 · 情绪调适 · AI数字人 · 陪伴机器人</p>
            <p class="flow-desc">沉浸式心理干预，科学疏导负面情绪</p>
            <span class="flow-tag">第三步 · 干预</span>
            <div class="click-hint">点击查看详情 →</div>
          </div>
        </div>

        <!-- 闭环总结 -->
        <div class="flow-summary">
          <span class="summary-line">检测发现风险 → 监测持续跟踪 → 疗愈及时干预</span>
          <span class="summary-line highlight">形成完整的心理健康守护闭环</span>
        </div>
      </div>
    </section>

    <!-- 方案价值 -->
    <section class="value-section">
      <div class="container">
        <h2 class="section-title">方案价值</h2>
        <div class="value-grid">
          <div class="value-card">
            <div class="value-icon">🛡️</div>
            <h4>事前预防</h4>
            <p>通过检测与监测实现心理风险早发现、早预警</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <h4>事中干预</h4>
            <p>疗愈模块提供科学的疏导与调适手段</p>
          </div>
          <div class="value-card">
            <div class="value-icon">📊</div>
            <h4>数据闭环</h4>
            <p>全流程数据贯通，支撑持续优化与精准决策</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 弹窗 Modal ===== -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-box">
        <button class="modal-close" @click="closeModal">✕</button>
        <div class="modal-icon">{{ currentData.icon }}</div>
        <h2 class="modal-title">{{ currentData.title }}</h2>
        <p class="modal-sub">{{ currentData.sub }}</p>
        <div class="modal-body">
          <p v-for="(item, index) in currentData.details" :key="index" class="modal-detail">
            {{ item }}
          </p>
        </div>
        <button class="modal-btn" @click="closeModal">我知道了</button>
      </div>
    </div>
  </div>
  <!-- ===== 建设目标 ===== -->
  <section class="goal-section">
    <div class="container">
      <div class="goal-content">
        <h2>建设目标</h2>
        <blockquote>
          “事前有预警 · 事中有干预 · 事后可追溯”<br />
          全面构筑主动式、立体化、全场景的校园安全防护网络
        </blockquote>
        <p>让校园成为学生健康成长的坚实屏障</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      currentData: {
        icon: '',
        title: '',
        sub: '',
        details: []
      },
      modalData: {
        detect: {
          icon: '🔬',
          title: '灵犀「SE」系列 · AI心理健康筛查系统',
          sub: '非接触式情绪识别，30秒快速筛查',
          details: [
            '基于振动影像技术，捕捉头颈部肌肉微振动，分析攻击性、压力、焦虑等情绪指标',
            '支持个体检测与团体报告，输出多维度心理指标（焦虑、压抑、情绪稳定性等）',
            '非接触式、无感采集，有效弥补传统量表的主观偏差与低龄群体适用性不足问题'
          ]
        },
        monitor: {
          icon: '📹',
          title: '灵犀「DW」系列 · AI行为识别预警系统',
          sub: '7×24小时校园行为监测，主动预警风险事件',
          details: [
            '覆盖校园重点场所，支持独处、高坠、欺凌、消防等多元异常事件实时预警',
            '基于视觉大模型与背影认知计算，精准锁定重点人员，实现行为轨迹还原',
            '无需前端硬件升级，100%利旧现有监控，2小时即可完成部署'
          ]
        },
        heal: {
          icon: '🧠',
          title: 'VR训练 · 情绪调适 · AI数字人 · 陪伴机器人',
          sub: '沉浸式心理干预，科学疏导负面情绪',
          details: [
            'VR智能身心运动训练系统：沉浸式骑行+实时生理监测，释放压力改善情绪',
            '情绪及压力调适训练系统：击打+呐喊+正念+放松四位一体闭环调适',
            'AI心理数字人：多模态情感识别，提供全链条心理服务',
            'AI陪伴潮玩机器人：融合四大AI大模型，实现全生命周期陪伴与主动安抚'
          ]
        }
      }
    }
  },
  methods: {
    openModal(type) {
      this.currentData = this.modalData[type]
      this.showModal = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.showModal = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
/* ===== 顶部横幅 ===== */
.banner {
  padding-top: 80px;
  background: linear-gradient(135deg, #0a2a44 0%, #1a4a7a 100%);
  color: #fff;
  text-align: center;
  padding: 100px 24px 60px;
}

.banner h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 12px;
}

.banner p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}

/* ===== 流程图区域 ===== */
.flow-section {
  padding: 60px 0 40px;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.flow-wrapper {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.flow-item {
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  background: #fff;
  border-radius: 20px;
  padding: 28px 20px 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #eef2f6;
  transition: 0.3s;
  cursor: pointer;
}

.flow-item:hover {
  transform: translateY(-6px);
  border-color: #3b9eff;
  box-shadow: 0 12px 40px rgba(59, 158, 255, 0.15);
}

.flow-image-placeholder {
  width: 100%;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  background: #eef2f6;
}

.flow-image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.click-hint {
  font-size: 13px;
  color: #3b9eff;
  margin-top: 12px;
  opacity: 0.6;
  transition: 0.3s;
}

.flow-item:hover .click-hint {
  opacity: 1;
}

.flow-item h3 {
  font-size: 24px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 4px;
}

.flow-product {
  font-weight: 600;
  color: #1e293b;
  font-size: 15px;
  margin-bottom: 4px;
}

.flow-desc {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 12px;
}

.flow-tag {
  display: inline-block;
  background: #e6f0ff;
  color: #1d4ed8;
  font-size: 12px;
  padding: 2px 16px;
  border-radius: 30px;
  font-weight: 500;
}

.flow-arrow {
  font-size: 28px;
  color: #3b9eff;
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-weight: 300;
}

.flow-summary {
  text-align: center;
  margin-top: 40px;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #eef2f6;
}

.summary-line {
  display: block;
  font-size: 16px;
  color: #475569;
}

.summary-line.highlight {
  font-size: 18px;
  font-weight: 700;
  color: #0f3b5e;
  margin-top: 4px;
}

/* ===== 方案价值 ===== */
.value-section {
  padding: 60px 0 64px;
  background: #ffffff;
}

.section-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 32px;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.value-card {
  text-align: center;
  padding: 28px 20px;
  background: #f8fafc;
  border-radius: 16px;
  transition: 0.3s;
}

.value-card:hover {
  background: #eef6ff;
  transform: translateY(-4px);
}

.value-icon {
  font-size: 36px;
  margin-bottom: 8px;
}

.value-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 4px;
}

.value-card p {
  color: #64748b;
  font-size: 14px;
}

/* ===== 弹窗样式 ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-box {
  background: #fff;
  max-width: 560px;
  width: 100%;
  padding: 40px 36px 32px;
  border-radius: 24px;
  position: relative;
  animation: modalIn 0.25s ease;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
}

@keyframes modalIn {
  from {
    transform: scale(0.94) translateY(20px);
    opacity: 0;
  }

  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #94a3b8;
  cursor: pointer;
  transition: 0.2s;
}

.modal-close:hover {
  color: #1e293b;
}

.modal-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.modal-title {
  font-size: 22px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 4px;
}

.modal-sub {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 20px;
}

.modal-body {
  margin-bottom: 24px;
}

.modal-detail {
  font-size: 15px;
  color: #334155;
  line-height: 1.7;
  padding: 6px 0;
  border-bottom: 1px solid #f1f5f9;
}

.modal-detail:last-child {
  border-bottom: none;
}

.modal-detail::before {
  content: "• ";
  color: #3b9eff;
  font-weight: 700;
}

.modal-btn {
  width: 100%;
  background: #3b9eff;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.modal-btn:hover {
  background: #1e7fd6;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .flow-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .flow-arrow {
    transform: rotate(90deg);
    padding: 4px 0;
  }

  .value-grid {
    grid-template-columns: 1fr;
  }

  .banner h1 {
    font-size: 28px;
  }

  .modal-box {
    padding: 28px 20px 24px;
  }
}
/* ===== 建设目标 ===== */
.goal-section {
  padding: 64px 0;
  background: #0a2a44;
  color: #fff;
  text-align: center;
}
.goal-content h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.goal-content blockquote {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 12px;
}
.goal-content p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}
@media (max-width: 768px) {
  .goal-content blockquote { font-size: 18px; }
}
</style>