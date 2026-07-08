<template>
  <div class="monitor-page">
    <!-- ===== 顶部横幅 ===== -->
    <section class="banner">
      <div class="banner-content">
        <h1>灵犀「DW」系列 · AI行为识别预警系统</h1>
        <p>7×24小时校园行为监测，主动预警风险事件</p>
      </div>
    </section>

    <!-- ===== 架构图 ===== -->
    <section class="arch-section">
      <div class="container">
        <div class="arch-image">
          <img src="@/assets/jiankongSystemDiagram.png" alt="AI行为识别预警系统架构图" />
          <p class="arch-note">无需前端硬件升级，复用现有监控设备，2小时即可完成部署</p>
        </div>
      </div>
    </section>

    <!-- ===== 核心技术原理 ===== -->
    <section class="tech-section">
      <div class="container">
        <div class="tech-header">
          <span class="tech-icon">⚙️</span>
          <h2>核心技术 · 视觉大模型 + 背影认知计算</h2>
          <p class="tech-sub">从被动监控到主动预警的智能化跃升</p>
        </div>
        <div class="tech-content">
          <p>
            系统基于机器智能对物理空间人员活动进行数字化感知，将智能化建设分为L1~L5五个层级，逐步实现从“被动监控”到“主动预警”的跃升，最终形成机器智能对物理空间人员活动的全面感知与洞察，指导管理运营机构形成快速决策，实现全方位智能化管理与精准数据驱动的业务优化。
          </p>
          <p>
            通过无感视觉捕捉模式结合学生心理问题知识图谱，可快速从庞大人群中收敛检索范围，锁定重点疑似目标人群，极大提升管理效能。系统融合视觉大模型、声纹识别、行为轨迹分析，构建多维数据交叉验证机制，预警准确率提升30%以上。
          </p>
          <div class="tech-features">
            <div class="tech-feature">
              <span class="tf-icon">🔄</span>
              <div>
                <h4>云边协同架构</h4>
                <p>边缘端实时处理视频流，云端汇聚全局数据，响应速度提升至毫秒级</p>
              </div>
            </div>
            <div class="tech-feature">
              <span class="tf-icon">🔗</span>
              <div>
                <h4>全场景智能联动</h4>
                <p>预警信息自动推送至安保、心理、后勤等多部门，形成感知→研判→处置→反馈的闭环</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 六大核心能力 ===== -->
    <section class="ability-section">
      <div class="container">
        <h2 class="section-title">六大核心能力</h2>
        <p class="section-sub">覆盖校园安全全场景 · 主动预警风险事件</p>
        <div class="ability-grid">
          <div class="ability-card">
            <div class="ability-icon">🚶</div>
            <h3>独处预警</h3>
            <p>覆盖校园各重点场所，利用独行人员算法实现学生独处分析，独处时间、时长、频次可动态设置。针对高频独处学生及时预警，提前关注心理健康问题。</p>
          </div>
          <div class="ability-card">
            <div class="ability-icon">🧠</div>
            <h3>心理健康预警</h3>
            <p>基于振动影像技术，通过头颈部肌肉振动幅度和频率分析潜在情绪，以非接触、无感知方式筛选异常情绪可疑人员，3-5秒完成情绪指标综合分析。</p>
          </div>
          <div class="ability-card">
            <div class="ability-icon">🏗️</div>
            <h3>防高防坠</h3>
            <p>基于“行为+身份”双模态识别技术，对天台、围栏等高风险区域实时监测，打架斗殴预警准确率提升至95%以上，跌倒不起10秒内触发预警。</p>
          </div>
          <div class="ability-card">
            <div class="ability-icon">🛡️</div>
            <h3>AI防欺凌</h3>
            <p>基于声音检测事件大模型，精准识别欺凌者威胁、呵斥、谩骂、耳光声及围观者检测，支持维吾尔语、哈萨克语、闽南语等方言，误报率低于1次/100天。</p>
          </div>
          <div class="ability-card">
            <div class="ability-icon">🔥</div>
            <h3>消防安全</h3>
            <p>以“AI+传感”为核心，支持火点检测、消防通道占道声光报警与远程喊话，集成电气火灾监测、电能质量检测及烟感联动，构建安消一体化主动防范体系。</p>
          </div>
          <div class="ability-card">
            <div class="ability-icon">🔍</div>
            <h3>快速找人</h3>
            <p>支持照片、姓名、学号等多种方式对逃课、缺寝等失联学生即时检索，实时追踪校园行动轨迹，支持背影图片进行身份关联与人脸锁定，实现精准寻人。</p>
          </div>
        </div>
      </div>
    </section>

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
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* ===== 顶部横幅 ===== */
.banner {
  padding-top: 80px;
  background: linear-gradient(135deg, #0a2a44 0%, #1a4a7a 100%);
  color: #fff;
  text-align: center;
  padding: 80px 24px 56px;
}
.banner-content {
  max-width: 900px;
  margin: 0 auto;
}
.banner-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.banner-tags .tag {
  background: rgba(255, 255, 255, 0.15);
  padding: 4px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}
.banner h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 8px;
}
.banner p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}

/* ===== 架构图 ===== */
.arch-section {
  padding: 48px 0;
  background: #f8fafc;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.arch-image {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #eef2f6;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 460px; /* 新增，限制高度，防止图片太高 */
}
.arch-image img {
  max-width: 100%;
  max-height: 380px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
}
.arch-note {
  text-align: center;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #3b9eff;
}

/* ===== 核心技术 ===== */
.tech-section {
  padding: 64px 0;
  background: #ffffff;
}
.tech-header {
  text-align: center;
  margin-bottom: 32px;
}
.tech-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 8px;
}
.tech-header h2 {
  font-size: 30px;
  font-weight: 700;
  color: #0f3b5e;
}
.tech-sub {
  color: #64748b;
  font-size: 17px;
}
.tech-content {
  max-width: 900px;
  margin: 0 auto;
}
.tech-content p {
  font-size: 16px;
  line-height: 1.9;
  color: #334155;
  margin-bottom: 16px;
}
.tech-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 24px;
}
.tech-feature {
  display: flex;
  gap: 16px;
  background: #f8fafc;
  padding: 20px 24px;
  border-radius: 12px;
  border: 1px solid #eef2f6;
}
.tf-icon {
  font-size: 28px;
  flex-shrink: 0;
}
.tech-feature h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 4px;
}
.tech-feature p {
  font-size: 14px;
  color: #64748b;
  margin: 0;
}

/* ===== 六大能力 ===== */
.ability-section {
  padding: 64px 0;
  background: #f8fafc;
}
.section-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 4px;
}
.section-sub {
  text-align: center;
  color: #64748b;
  font-size: 17px;
  margin-bottom: 40px;
}
.ability-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.ability-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 24px;
  border: 1px solid #eef2f6;
  transition: 0.3s;
}
.ability-card:hover {
  transform: translateY(-4px);
  border-color: #3b9eff;
  box-shadow: 0 8px 30px rgba(59,158,255,0.12);
}
.ability-icon {
  font-size: 32px;
  margin-bottom: 8px;
}
.ability-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 6px;
}
.ability-card p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
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
  color: rgba(255,255,255,0.95);
  margin-bottom: 12px;
}
.goal-content p {
  font-size: 18px;
  color: rgba(255,255,255,0.7);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .banner h1 { font-size: 26px; }
  .ability-grid { grid-template-columns: 1fr 1fr; }
  .tech-features { grid-template-columns: 1fr; }
  .goal-content blockquote { font-size: 18px; }
}
@media (max-width: 480px) {
  .ability-grid { grid-template-columns: 1fr; }
  .banner-tags .tag { font-size: 12px; padding: 2px 14px; }
}
</style>