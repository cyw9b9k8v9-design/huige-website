<template>
  <div class="service-page">
    <!-- 顶部横幅 -->
    <section class="banner">
      <div class="banner-content">
        <h1>服务案例</h1>
        <p>已服务全国多所K12学校、高等院校、社区及企业单位</p>
      </div>
    </section>

    <!-- 案例卡片列表 -->
    <section class="section">
      <div class="container">
        <div class="case-grid">
          <div
            v-for="item in allCases"
            :key="item.id"
            class="case-card"
            :class="{ clickable: item.hasDetail }"
            @click="item.hasDetail ? openDetail(item.id) : null"
          >
            <div class="case-icon">{{ item.icon }}</div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.shortDesc }}</p>
            <span class="case-tag">{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 建设目标 -->
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

    <!-- 详情弹窗 -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeDetail">
      <div class="modal-box">
        <button class="modal-close" @click="closeDetail">✕</button>
        <div class="detail-content">
          <h2 class="detail-title">{{ currentDetail.name }}</h2>
          <p class="detail-sub">{{ currentDetail.tag }} · {{ currentDetail.subTitle }}</p>
          <div class="detail-main-image">
            <img :src="currentDetail.mainImage" :alt="currentDetail.name" />
          </div>
          <div class="detail-text">
            <div v-for="(section, index) in currentDetail.sections" :key="index" class="detail-section">
              <h4>{{ section.title }}</h4>
              <p>{{ section.content }}</p>
            </div>
          </div>
          <button class="detail-back-btn" @click="closeDetail">← 返回案例列表</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      currentDetail: {},
      allCases: [
        // ===== 有详情页（6个） =====
        {
          id: 'lp3z',
          name: '临平第三中学',
          tag: 'K12',
          icon: '🏫',
          shortDesc: '部署AI动态监测系统，实现校园行为主动预警',
          hasDetail: true,
          mainImage: '/src/assets/lp3z-main.png',
          subTitle: 'AI动态监测 · 行为预警',
          sections: [
            { title: '项目背景', content: '临平第三中学是余杭区一所公办初中，学校在日常安全管理中面临行为异常难发现、预警不及时等痛点。传统的巡查方式存在盲区，无法做到24小时全覆盖。' },
            { title: '解决方案', content: '引入晖格科技AI动态监测系统，基于校园现有摄像头，对宿舍、天台、走廊等重点区域进行行为识别。系统支持独处预警、打架斗殴识别、跌倒检测等功能，发现异常行为后主动推送提醒给班主任。' },
            { title: '合作成果', content: '系统部署后，实现了校园重点区域的7×24小时智能监测。班主任不再需要时刻盯着屏幕，却能及时掌握学生异常行为动态，安全管理效率显著提升。' }
          ]
        },
        {
          id: 'xlzx',
          name: '余杭区闲林中学',
          tag: 'K12',
          icon: '🏫',
          shortDesc: '引入静态AI筛查，40秒出报告，老师从数据统计中解放出来',
          hasDetail: true,
          mainImage: '/src/assets/xlzx-main.png',
          subTitle: 'AI心理健康筛查 · 静态筛查',
          sections: [
            { title: '项目背景', content: '闲林中学是余杭区一所公办初中，过去学校心理健康筛查主要依靠传统量表，学生答题时间长、配合度低，数据准确率不高。' },
            { title: '解决方案', content: '引入晖格科技静态AI心理健康筛查系统，学生只需进行40秒的视频采集，系统即可自动生成多维心理评估报告，无需答题、无需人工统计。' },
            { title: '合作成果', content: '学校心理辅导站表示，数据直接、精准，班主任从繁重的数据统计负担中解放出来，真正实现了心理筛查的常态化。' }
          ]
        },
        {
          id: 'ztzx',
          name: '余杭区中泰中学',
          tag: 'K12',
          icon: '🏫',
          shortDesc: 'AI筛查数据比过去更可信，心理工作有了更可靠的依据',
          hasDetail: true,
          mainImage: '/src/assets/ztzx-main.png',
          subTitle: 'AI心理健康筛查 · 静态筛查',
          sections: [
            { title: '项目背景', content: '中泰中学是余杭区一所公办初中，长期以来学校心理健康工作依赖传统量表筛查，数据可信度低、统计工作量大。' },
            { title: '解决方案', content: '引入晖格科技静态AI心理健康筛查系统，通过非接触式视频分析，快速完成全校学生心理状态评估，系统自动生成个体与团体报告。' },
            { title: '合作成果', content: '学校心理辅导站表示，现在的数据比过去更可信，心理工作有了更可靠的依据。筛查效率提升了数倍，数据与学生日常表现基本对得上。' }
          ]
        },
        {
          id: 'hzxj',
          name: '杭州学军中学',
          tag: 'K12',
          icon: '🏫',
          shortDesc: '浙江省一级重点中学，全面升级心理健康中心',
          hasDetail: true,
          mainImage: '/src/assets/hzxj-main.png',
          subTitle: '心理中心建设 · VR训练 · 情绪调适',
          sections: [
            { title: '项目背景', content: '杭州学军中学是浙江省一级重点中学、浙江省特色示范学校。学校高度重视学生心理健康工作，致力于打造全面升级的心理健康中心。' },
            { title: '解决方案', content: '引入晖格科技一系列前沿心理设备，涵盖AI心理筛查、VR智能身心运动训练、情绪及压力调适训练、AI心理数字人等系统，打造集测评、训练、宣泄、咨询于一体的心理健康中心。' },
            { title: '合作成果', content: '心理健康中心集心理测评、减压放松、团体活动、VR训练、情绪宣泄等多元化功能于一体，为学生的全面发展奠定坚实基础，成为学校心理健康教育的标杆案例。' }
          ]
        },
        {
          id: 'gsdx',
          name: '浙江广厦建设职业技术大学',
          tag: '高校',
          icon: '🎓',
          shortDesc: '30秒AI身心筛查成心理游园会"人气王"',
          hasDetail: true,
          mainImage: '/src/assets/gsdx-main.png',
          subTitle: 'AI心理健康筛查 · 高校心理游园会',
          sections: [
            { title: '项目背景', content: '浙江广厦建设职业技术大学举办第二十届大学生心理健康月开幕式暨心理游园会，以"科技引领、数字育人"为核心特色，将积极心理学理念融入沉浸式体验。' },
            { title: '解决方案', content: '晖格科技带来身心健康智能检测专区，无需填表、无需开口，师生只需坐定30秒即可完成一次快速的身心状态评估。数据本地存储、不上云，仅用于学校团体身心健康状态的整体分析与分级预警。' },
            { title: '合作成果', content: '检测专区成为全场最受欢迎的体验项目。不少师生第一次直观地看到自己的压力、情绪稳定性等多维度状态指标。基于团体检测数据，晖格科技为学校提供了重点关注指标建议，帮助学校精准投放心理资源。' }
          ]
        },
        {
          id: 'jpljd',
          name: '上海市杨浦区江浦路街道',
          tag: '社区',
          icon: '🏘️',
          shortDesc: '上海市示范性社区心理服务标杆，引入AI数字人+VR训练全套方案',
          hasDetail: true,
          mainImage: '/src/assets/jpljd-main.png',
          subTitle: 'AI数字人 · VR训练 · 社区心理服务',
          sections: [
            { title: '项目背景', content: '上海市杨浦区江浦路街道心理健康服务中心是上海市示范性社区心理服务标杆，致力于构建现代化、智能化的社区心理健康服务新生态。' },
            { title: '解决方案', content: '引入晖格科技AI核心技术矩阵，涵盖AI心理数字人、AI冥想与智能咨询系统、VR智能身心运动训练系统、VR多维心理成长系统、情绪压力调适训练系统等系列产品，深度联动心理健康大数据智慧云平台，实现智能物联与AI联动预警。' },
            { title: '合作成果', content: '构建起AI智能化、高端化、个性化的现代化社区心理健康服务新生态，成为社区AI智能化服务的标杆，为社区居民提供全方位、多层次的心理健康支持。' }
          ]
        },
        // ===== 无详情页（8个） =====
        {
          id: 's1',
          name: '上海交通大学附属中学',
          tag: 'K12',
          icon: '🏫',
          shortDesc: '上海四大名校之一，引进AI心理筛查系统，实现全校心理档案数字化管理',
          hasDetail: false
        },
        {
          id: 's2',
          name: '杭州市第二中学',
          tag: 'K12',
          icon: '🏫',
          shortDesc: '浙江省首批一级重点中学，引进智能心理设备，打造心灵成长乐园',
          hasDetail: false
        },
        {
          id: 's3',
          name: '杭州师范大学附属闲林和睦小学',
          tag: 'K12',
          icon: '🏫',
          shortDesc: '引入AI心理健康筛查系统，实现全校心理档案数字化管理',
          hasDetail: false
        },
        {
          id: 's4',
          name: '杭州技师学院',
          tag: '中职',
          icon: '🔧',
          shortDesc: '建设心理健康中心，引入VR训练与情绪调适系统',
          hasDetail: false
        },
        {
          id: 's5',
          name: '浙江工商大学',
          tag: '高校',
          icon: '🎓',
          shortDesc: '高等院校心理健康中心建设，覆盖师生心理筛查与预警体系',
          hasDetail: false
        },
        {
          id: 's6',
          name: '浙江省总工会',
          tag: '企业',
          icon: '🏢',
          shortDesc: '省级单位心理健康服务合作，提供职工心理关爱与干预支持',
          hasDetail: false
        },
        {
          id: 's7',
          name: '中国人民解放军东部战区政治部保卫局',
          tag: '机关',
          icon: '🏛️',
          shortDesc: '部队心理健康服务合作，提供专业化心理支持',
          hasDetail: false
        },
        {
          id: 's8',
          name: '杭州市红十字会医院体检中心',
          tag: '医院',
          icon: '🏥',
          shortDesc: '引入AI心理健康筛查系统，纳入常规体检项目',
          hasDetail: false
        }
      ]
    }
  },
  methods: {
    openDetail(id) {
      const found = this.allCases.find(item => item.id === id && item.hasDetail)
      if (found) {
        this.currentDetail = found
        this.showModal = true
        document.body.style.overflow = 'hidden'
      }
    },
    closeDetail() {
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
  padding: 120px 24px 80px;
}
.banner h1 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 12px;
}
.banner p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}

/* ===== 案例列表 ===== */
.section {
  padding: 64px 0;
  background: #f8fafc;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

/* ===== 卡片（完全照第一版样式） ===== */
.case-card {
  background: #fff;
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid #eef2f6;
  transition: 0.3s;
  cursor: default;
}
.case-card.clickable {
  cursor: pointer;
}
.case-card.clickable:hover {
  transform: translateY(-6px);
  border-color: #3b9eff;
  box-shadow: 0 8px 30px rgba(59, 158, 255, 0.15);
}
.case-card:not(.clickable):hover {
  transform: translateY(-2px);
  border-color: #dce3ec;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}
.case-icon {
  font-size: 36px;
  margin-bottom: 8px;
}
.case-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 6px;
}
.case-card p {
  color: #475569;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
  flex: 1;
}
.case-tag {
  display: inline-block;
  background: #e6f0ff;
  color: #1d4ed8;
  font-size: 12px;
  padding: 2px 14px;
  border-radius: 30px;
  font-weight: 500;
  align-self: flex-start;
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

/* ===== 详情弹窗 ===== */
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
  overflow-y: auto;
}
.modal-box {
  background: #fff;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px 32px 28px;
  border-radius: 24px;
  position: relative;
  animation: modalIn 0.25s ease;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
}
@keyframes modalIn {
  from { transform: scale(0.94) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}
.modal-close {
  position: sticky;
  top: 0;
  float: right;
  background: none;
  border: none;
  font-size: 28px;
  color: #94a3b8;
  cursor: pointer;
  z-index: 10;
}
.modal-close:hover {
  color: #1e293b;
}
.detail-title {
  font-size: 24px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 2px;
}
.detail-sub {
  font-size: 15px;
  color: #64748b;
  margin-bottom: 16px;
}
.detail-main-image {
  width: 100%;
  max-height: 280px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 20px;
  background: #eef2f6;
}
.detail-main-image img {
  width: 100%;
  height: 100%;
  max-height: 280px;
  object-fit: contain;
  display: block;
}
.detail-text {
  margin-bottom: 16px;
}
.detail-section {
  margin-bottom: 14px;
}
.detail-section h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 4px;
}
.detail-section p {
  font-size: 15px;
  line-height: 1.8;
  color: #334155;
  margin: 0;
}
.detail-back-btn {
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
  margin-top: 16px;
}
.detail-back-btn:hover {
  background: #1e7fd6;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .banner h1 { font-size: 28px; }
  .case-grid { grid-template-columns: 1fr; }
  .modal-box { padding: 20px 16px; max-height: 95vh; }
  .detail-main-image { max-height: 200px; }
  .detail-main-image img { max-height: 200px; }
  .goal-content blockquote { font-size: 18px; }
}
</style>