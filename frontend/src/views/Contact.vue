<template>
  <div class="contact-page">

    <!-- ===== 顶部横幅 ===== -->
    <section class="banner">
      <div class="banner-content">
        <h1>联系我们</h1>
        <p>AI赋能身心守护，智慧护航健康生态</p>
      </div>
    </section>

    <!-- ===== 留言表单（置顶） ===== -->
    <section class="form-section">
      <div class="container">
        <div class="form-box">
          <h2>在线留言</h2>
          <p class="form-sub">我们将尽快与您取得联系</p>
          <div v-if="submitted" class="success-msg">
            ✅ 留言提交成功，我们会尽快联系您！
          </div>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label>姓名</label>
              <input v-model="form.name" placeholder="请输入您的姓名" required />
            </div>
            <div class="form-group">
              <label>电话</label>
              <input v-model="form.phone" placeholder="请输入您的电话" required />
            </div>
            <div class="form-group">
              <label>留言内容</label>
              <textarea v-model="form.content" rows="4" placeholder="请告诉我们您的需求"></textarea>
            </div>
            <button type="submit" class="btn-submit">提交留言</button>
          </form>
        </div>
      </div>
    </section>

    <!-- ===== 联系方式 ===== -->
    <section class="info-section">
      <div class="container">
        <div class="info-grid">
          <!-- 地址 -->
          <div class="info-card" @click="openModal('address')">
            <div class="info-icon">📍</div>
            <h3>公司地址</h3>
            <p>浙江省杭州市滨江区浦沿街道火炬大厦581号C座601-2</p>
          </div>
          <!-- 电话 -->
          <div class="info-card" @click="openModal('phone')">
            <div class="info-icon">📞</div>
            <h3>服务热线</h3>
            <p>198-5810-6868</p>
          </div>
          <!-- 公众号 -->
          <div class="info-card" @click="openModal('wechat')">
            <div class="info-icon">💬</div>
            <h3>微信公众号</h3>
            <p>晖格AI心理</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Modal 弹窗 ===== -->
    <div class="modal-overlay" v-if="modalVisible" @click.self="closeModal">
      <div class="modal-box">
        <button class="modal-close" @click="closeModal">✕</button>

        <!-- 地址弹窗 -->
        <div v-if="modalType === 'address'">
          <div class="modal-icon">📍</div>
          <h2 class="modal-title">公司地址</h2>
          <p class="modal-address-text">浙江省杭州市滨江区浦沿街道火炬大厦581号C座601-2</p>
          <a
            href="https://uri.amap.com/marker?position=120.1552,30.1895&name=晖格科技"
            target="_blank"
            class="modal-btn-primary"
          >
            查看地图 →
          </a>
        </div>

        <!-- 电话弹窗 -->
        <div v-if="modalType === 'phone'">
          <div class="modal-icon">📞</div>
          <h2 class="modal-title">服务热线</h2>
          <p class="modal-phone-number">198-5810-6868</p>
          <button class="modal-btn-primary" @click="copyPhone">复制号码</button>
          <p v-if="copySuccess" class="copy-tip">✅ 已复制，可前往拨号</p>
        </div>

        <!-- 公众号弹窗 -->
        <div v-if="modalType === 'wechat'">
          <div class="modal-icon">💬</div>
          <h2 class="modal-title">微信公众号</h2>
          <p class="modal-sub-text">扫描二维码关注「晖格AI心理」</p>
          <div class="qr-wrapper">
            <img src="@/assets/qrcode.png" alt="公众号二维码" />
          </div>
          <p class="qr-hint">长按或截图保存，扫码关注</p>
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

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: '', phone: '', content: '' },
      submitted: false,
      modalVisible: false,
      modalType: '',
      copySuccess: false
    }
  },
  methods: {
    async submitForm() {
      if (!this.form.name || !this.form.phone || !this.form.content) {
        alert('请填写完整信息');
        return;
      }
      if (this.form.phone.length !== 11) {
        alert('请输入正确的11位手机号');
        return;
      }
      try {
        const res = await fetch('http://localhost:3000/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });
        if (res.ok) {
          this.submitted = true;
          this.form = { name: '', phone: '', content: '' };
          setTimeout(() => { this.submitted = false; }, 3000);
        } else {
          alert('提交失败，请重试');
        }
      } catch (e) {
        alert('网络错误，请检查后端是否启动');
      }
    },
    openModal(type) {
      this.modalType = type;
      this.modalVisible = true;
      this.copySuccess = false;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalVisible = false;
      document.body.style.overflow = '';
    },
    copyPhone() {
      const phone = '19858106868';
      navigator.clipboard.writeText(phone).then(() => {
        this.copySuccess = true;
        setTimeout(() => { this.copySuccess = false; }, 3000);
      }).catch(() => {
        alert('复制失败，请手动复制：198-5810-6868');
      });
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

/* ===== 留言表单 ===== */
.form-section {
  padding: 64px 0 40px;
  background: #ffffff;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.form-box {
  max-width: 640px;
  margin: 0 auto;
  background: #f8fafc;
  padding: 40px 36px;
  border-radius: 20px;
  border: 1px solid #eef2f6;
}
.form-box h2 {
  font-size: 26px;
  font-weight: 700;
  color: #0f3b5e;
  text-align: center;
  margin-bottom: 4px;
}
.form-sub {
  text-align: center;
  color: #64748b;
  font-size: 15px;
  margin-bottom: 24px;
}
.success-msg {
  background: #dcfce7;
  color: #166534;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
}
.form-group {
  margin-bottom: 18px;
}
.form-group label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: #1e293b;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #dce3ec;
  border-radius: 12px;
  font-size: 15px;
  transition: 0.2s;
  background: #ffffff;
  font-family: inherit;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b9eff;
  box-shadow: 0 0 0 4px rgba(59,158,255,0.10);
}
.btn-submit {
  width: 100%;
  background: #3b9eff;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 40px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}
.btn-submit:hover {
  background: #1e7fd6;
}

/* ===== 联系方式卡片 ===== */
.info-section {
  padding: 40px 0 64px;
  background: #f8fafc;
}
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.info-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  border: 2px solid transparent;
  transition: 0.25s;
  cursor: pointer;
}
.info-card:hover {
  border-color: #3b9eff;
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(59,158,255,0.15);
}
.info-icon {
  font-size: 36px;
  margin-bottom: 8px;
}
.info-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 6px;
}
.info-card p {
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
}

/* ===== Modal 弹窗 ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-box {
  background: #fff;
  max-width: 560px;
  width: 100%;
  padding: 40px 32px 32px;
  border-radius: 24px;
  position: relative;
  animation: modalIn 0.25s ease;
  box-shadow: 0 24px 60px rgba(0,0,0,0.25);
  text-align: center;
}
@keyframes modalIn {
  from { transform: scale(0.94) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
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
.modal-close:hover { color: #1e293b; }
.modal-icon {
  font-size: 48px;
  margin-bottom: 8px;
}
.modal-title {
  font-size: 22px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 6px;
}
.modal-address-text {
  font-size: 16px;
  color: #334155;
  line-height: 1.7;
  margin-bottom: 20px;
}
.modal-phone-number {
  font-size: 28px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 16px;
  letter-spacing: 2px;
}
.modal-sub-text {
  font-size: 15px;
  color: #64748b;
  margin-bottom: 16px;
}
.modal-btn-primary {
  display: inline-block;
  background: #3b9eff;
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: 0.25s;
}
.modal-btn-primary:hover {
  background: #1e7fd6;
}
.copy-tip {
  margin-top: 12px;
  color: #16a34a;
  font-weight: 500;
}
.qr-wrapper {
  margin: 8px auto 8px;
  max-width: 380px;
  width: 100%;
}
.qr-wrapper img {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #eef2f6;
  display: block;
}
.qr-hint {
  font-size: 14px;
  color: #94a3b8;
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
  .banner h1 { font-size: 28px; }
  .info-grid { grid-template-columns: 1fr; }
  .form-box { padding: 28px 18px; }
  .modal-box { padding: 28px 18px; }
  .goal-content blockquote { font-size: 18px; }
}
</style>