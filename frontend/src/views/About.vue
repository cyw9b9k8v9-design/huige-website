<template>
  <div class="about-page">

    <!-- ===== 顶部横幅 ===== -->
    <section class="banner">
      <div class="banner-content">
        <h1>关于晖格科技</h1>
        <p>AI赋能心理守护，智慧护航心灵安康</p>
      </div>
    </section>

    <!-- ===== 公司简介 ===== -->
    <section class="intro-section">
      <div class="container">
        <h2>公司简介</h2>
        <div class="intro-text">
          <p>
            晖格科技是AI心理健康生态服务引领者，以"AI赋能心理守护，智慧护航心灵安康"为使命，深耕心理健康领域，聚焦AI技术与心理服务深度融合，打造"动静态协同、全流程闭环"服务模式。
          </p>
          <p>
            在校园安全场景中，我们构建了"预防-监测-预警-干预"一体化心理安全防护体系，通过静态情绪识别筛查与动态行为轨迹分析，实现对学生的心理状态无感评估、危机风险早期预警、家校医多方联动干预，有效防范校园心理安全事件，为师生心理健康保驾护航。我们致力于为各类组织与用户提供高品质心理健康解决方案，让每一个校园都成为心灵的安全港湾。
          </p>
          <p>
            核心优势突出技术与生态双价值：自主可控的AI心理技术体系经权威验证；标准化+定制化落地体系适配企校、社区、医疗等多场景；严守数据安全与隐私保护；联动优质资源搭建开放协同的心理服务生态。目前，晖格科技已实现技术与服务体系规模化落地，推动心理健康服务从"单点覆盖"向"生态化供给"升级，为全民搭建专业可及的心理支持网络，助力健康中国建设。
          </p>
        </div>
      </div>
    </section>

    <!-- ===== 核心优势 ===== -->
    <section class="advantage-section">
      <div class="container">
        <h2 class="section-title">核心优势</h2>
        <div class="advantage-grid">
          <div class="advantage-card">
            <div class="adv-icon">🧠</div>
            <h3>自主可控的AI心理技术体系</h3>
            <p>经权威验证的AI心理技术，拥有多项发明专利与软件著作权</p>
          </div>
          <div class="advantage-card">
            <div class="adv-icon">🔄</div>
            <h3>标准化+定制化落地体系</h3>
            <p>适配企校、社区、医疗等多场景，灵活满足不同客户需求</p>
          </div>
          <div class="advantage-card">
            <div class="adv-icon">🛡️</div>
            <h3>数据安全与隐私保护</h3>
            <p>严守数据安全底线，保障用户心理健康信息隐私</p>
          </div>
          <div class="advantage-card">
            <div class="adv-icon">🤝</div>
            <h3>开放协同的心理服务生态</h3>
            <p>联动优质资源，搭建开放协同的心理服务网络</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 公司介绍视频 ===== -->
    <section class="video-section">
      <div class="container">
        <h2>公司介绍</h2>
        <p class="video-sub">用AI守护校园心理健康</p>
        <div class="video-wrapper">
          <video controls preload="metadata" poster="">
            <source src="@/assets/introduction.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>

    <!-- ===== 研发团队 ===== -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">研发团队</h2>
        <p class="section-sub">人工智能 · 心理学 · 临床治疗跨学科专家联合打造</p>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar">👨‍🔬</div>
            <h3>张向阳</h3>
            <p>中科院心理研究所教授 · 海外华人精神医学会主席</p>
            <p class="team-desc">累计发表SCI论文540余篇，全国精神疾病领域学术影响力百强第二</p>
          </div>
          <div class="team-card">
            <div class="team-avatar">👨‍💻</div>
            <h3>许可</h3>
            <p>北航计算机系博导 · 973项目专家组成员</p>
            <p class="team-desc">中国大陆首个在国际顶级AI刊物发表情绪计算研究成果的学者</p>
          </div>
          <div class="team-card">
            <div class="team-avatar">👩‍⚕️</div>
            <h3>庞婷</h3>
            <p>浙江大学公共卫生学院助理研究员 · 浙大二院</p>
            <p class="team-desc">发表SCI论文11篇，参与研发语音识别智能化认知筛查工具</p>
          </div>
          <div class="team-card">
            <div class="team-avatar">👩‍🏫</div>
            <h3>孙煦雪</h3>
            <p>浙江传媒学院教授 · 美国南弗洛里达大学博士</p>
            <p class="team-desc">研究方向为大数据预测分析、人工智能、贝叶斯统计建模</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== AI陪伴潮玩机器人（新增模块） ===== -->
    <section class="robot-section">
      <div class="container">
        <h2 class="section-title">AI陪伴潮玩机器人</h2>
        <p class="section-sub">科技 × 陪伴 · 让情感有温度</p>
        <div class="robot-grid">
          <div class="robot-card">
            <video controls preload="metadata" poster="">
              <source src="@/assets/tata.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
            <h3>皮塔 PITA</h3>
            <p>极简科技风 · 食品级亲肤硅胶</p>
          </div>
          <div class="robot-card">
            <video controls preload="metadata" poster="">
              <source src="@/assets/kbao.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
            <h3>K宝</h3>
            <p>全生命周期陪伴 · 仿生毛绒生物</p>
          </div>
          <div class="robot-card">
            <video controls preload="metadata" poster="">
              <source src="@/assets/karuru.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
            <h3>卡露 KALU</h3>
            <p>毛绒挂饰 · NFC换装社交</p>
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
.banner h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 8px;
}
.banner p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}

/* ===== 公司简介 ===== */
.intro-section {
  padding: 64px 0;
  background: #ffffff;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.intro-section h2 {
  font-size: 30px;
  font-weight: 700;
  color: #0f3b5e;
  text-align: center;
  margin-bottom: 24px;
}
.intro-text p {
  font-size: 16px;
  line-height: 1.9;
  color: #334155;
  margin-bottom: 16px;
}

/* ===== 核心优势 ===== */
.advantage-section {
  padding: 64px 0;
  background: #f8fafc;
}
.section-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 40px;
}
.advantage-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.advantage-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 20px;
  text-align: center;
  border: 1px solid #eef2f6;
  transition: 0.3s;
}
.advantage-card:hover {
  transform: translateY(-4px);
  border-color: #3b9eff;
  box-shadow: 0 8px 30px rgba(59,158,255,0.12);
}
.adv-icon {
  font-size: 36px;
  margin-bottom: 8px;
}
.advantage-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 8px;
}
.advantage-card p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
}

/* ===== 公司介绍视频 ===== */
.video-section {
  padding: 64px 0;
  background: #ffffff;
}
.video-section h2 {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 8px;
}
.video-sub {
  text-align: center;
  color: #64748b;
  font-size: 17px;
  margin-bottom: 32px;
}
.video-wrapper {
  max-width: 800px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #eef2f6;
}
.video-wrapper video {
  width: 100%;
  display: block;
  background: #000;
}

/* ===== 研发团队 ===== */
.team-section {
  padding: 64px 0;
  background: #f8fafc;
}
.section-sub {
  text-align: center;
  color: #64748b;
  font-size: 17px;
  margin-bottom: 40px;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.team-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 20px;
  text-align: center;
  border: 1px solid #eef2f6;
  transition: 0.3s;
}
.team-card:hover {
  transform: translateY(-4px);
  border-color: #3b9eff;
  box-shadow: 0 8px 30px rgba(59,158,255,0.12);
}
.team-avatar {
  font-size: 48px;
  margin-bottom: 8px;
}
.team-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 4px;
}
.team-card p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
}
.team-desc {
  font-size: 13px;
  color: #94a3b8;
  margin-top: 8px;
}

/* ===== AI陪伴潮玩机器人 ===== */
.robot-section {
  padding: 64px 0;
  background: #ffffff;
}
.robot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.robot-card {
  background: #f8fafc;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eef2f6;
  transition: 0.3s;
}
.robot-card:hover {
  transform: translateY(-4px);
  border-color: #3b9eff;
  box-shadow: 0 8px 30px rgba(59,158,255,0.10);
}
.robot-card video {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #000;
}
.robot-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0f3b5e;
  padding: 16px 20px 4px;
}
.robot-card p {
  font-size: 14px;
  color: #64748b;
  padding: 0 20px 20px;
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

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .banner h1 { font-size: 28px; }
  .advantage-grid { grid-template-columns: 1fr 1fr; }
  .team-grid { grid-template-columns: 1fr 1fr; }
  .robot-grid { grid-template-columns: 1fr; }
  .goal-content blockquote { font-size: 18px; }
}
@media (max-width: 480px) {
  .advantage-grid { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: 1fr; }
}
</style>