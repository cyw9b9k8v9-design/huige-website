<template>
  <div class="admin-layout">

    <!-- ===== 侧边栏 ===== -->
    <aside class="sidebar">
      <div class="sidebar-top">
        <div class="admin-info">
          <span class="admin-avatar">👤</span>
          <span class="admin-name">管理员</span>
        </div>
        <button class="btn-logout" @click="logout">退出登录</button>
      </div>
      <nav class="sidebar-nav">
        <a class="nav-item" :class="{ active: currentTab === 'overview' }" @click="currentTab = 'overview'">
          <span class="nav-icon">📊</span>
          <span>数据总览</span>
        </a>
        <a class="nav-item" :class="{ active: currentTab === 'messages' }" @click="currentTab = 'messages'">
          <span class="nav-icon">💬</span>
          <span>留言管理</span>
          <span class="nav-badge" v-if="unreadCount > 0">{{ unreadCount }}</span>
        </a>
        <a class="nav-item" :class="{ active: currentTab === 'home' }" @click="currentTab = 'home'">
          <span class="nav-icon">🏠</span>
          <span>首页配置</span>
        </a>
      </nav>
    </aside>

    <!-- ===== 主内容区 ===== -->
    <main class="main-content">

      <!-- ===== 数据总览 ===== -->
      <div v-if="currentTab === 'overview'">
        <div class="stats">
          <div class="stat-card">
            <div class="stat-number">{{ contacts.length }}</div>
            <div class="stat-label">总留言数</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ todayCount }}</div>
            <div class="stat-label">今日新增</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ unreadCount }}</div>
            <div class="stat-label">未读留言</div>
          </div>
        </div>

        <div class="quick-actions">
          <div class="quick-card" @click="currentTab = 'messages'">
            <span class="quick-icon">💬</span>
            <div>
              <h4>查看留言</h4>
              <p>管理所有用户留言</p>
            </div>
            <span class="quick-arrow">→</span>
          </div>
          <div class="quick-card" @click="currentTab = 'home'">
            <span class="quick-icon">🏠</span>
            <div>
              <h4>编辑首页</h4>
              <p>修改首页文案内容</p>
            </div>
            <span class="quick-arrow">→</span>
          </div>
        </div>
      </div>

      <!-- ===== 留言管理 ===== -->
      <div v-if="currentTab === 'messages'">
        <div class="list-header">
          <span class="list-title">留言管理</span>
          <span class="list-count">共 {{ contacts.length }} 条</span>
          <button class="btn-refresh" @click="fetchContacts">刷新</button>
        </div>

        <div v-if="loading" class="loading">加载中...</div>
        <div v-else-if="contacts.length === 0" class="empty">暂无留言</div>
        <div v-else class="table-wrapper">
          <table class="contact-table">
            <thead>
              <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>留言内容预览</th>
                <th>提交时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in contacts" :key="item.id">
                <td class="col-name">{{ item.name }}</td>
                <td class="col-phone">{{ item.phone }}</td>
                <td class="col-preview">{{ item.content }}</td>
                <td class="col-time">{{ formatTime(item.created_at) }}</td>
                <td class="col-status">
                  <span class="status-badge" :class="item.is_read ? 'read' : 'unread'">
                    {{ item.is_read ? '已读' : '未读' }}
                  </span>
                </td>
                <td class="col-actions">
                  <button class="btn-detail" @click="openDetail(item)">查看详情</button>
                  <button class="btn-delete" @click="deleteContact(item.id)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ===== 首页配置 ===== -->
      <div v-if="currentTab === 'home'">
        <div class="config-header">
          <span class="config-title">首页配置</span>
        </div>
        <div class="config-body">
          <div class="config-group">
            <label>Banner 主标题</label>
            <input v-model="homeConfig.title" placeholder="请输入主标题" />
          </div>
          <div class="config-group">
            <label>Banner 副标题</label>
            <input v-model="homeConfig.subtitle" placeholder="请输入副标题" />
          </div>
          <div class="config-group" v-for="(item, index) in homeConfig.modules" :key="index">
            <label>{{ ['检测', '监测', '疗愈'][index] }} 板块</label>
            <div class="config-row">
              <input v-model="item.title" placeholder="板块标题" />
              <input v-model="item.desc" placeholder="板块描述" />
            </div>
          </div>
          <button class="btn-save" @click="saveHomeConfig">保存配置</button>
          <span v-if="saveSuccess" class="save-tip">✅ 保存成功</span>
        </div>
      </div>

    </main>

    <!-- ===== 详情弹窗 ===== -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeDetail">
      <div class="modal-box">
        <button class="modal-close" @click="closeDetail">✕</button>
        <div class="modal-icon">💬</div>
        <h2 class="modal-title">{{ currentDetail.name }}</h2>
        <p class="modal-phone">📞 {{ currentDetail.phone }}</p>
        <div class="modal-content">
          <p>{{ currentDetail.content }}</p>
        </div>
        <p class="modal-time">提交时间：{{ formatTime(currentDetail.created_at) }}</p>
        <button class="modal-btn" @click="closeDetail">我知道了</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'overview',
      contacts: [],
      loading: true,
      showModal: false,
      currentDetail: { name: '', phone: '', content: '', created_at: '', id: null },
      saveSuccess: false,
      homeConfig: {
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
  computed: {
    todayCount() {
      const today = new Date().toDateString()
      return this.contacts.filter(item => {
        if (!item.created_at) return false
        return new Date(item.created_at).toDateString() === today
      }).length
    },
    unreadCount() {
      return this.contacts.filter(item => !item.is_read).length
    }
  },
  mounted() {
    this.fetchContacts()
    this.loadHomeConfig()
  },
  methods: {
    async fetchContacts() {
      try {
        const res = await fetch('http://localhost:3000/api/contacts')
        const data = await res.json()
        this.contacts = data
      } catch (e) {
        console.error('加载留言失败', e)
      } finally {
        this.loading = false
      }
    },
    async deleteContact(id) {
      if (!confirm('确认删除这条留言吗？')) return
      try {
        await fetch(`http://localhost:3000/api/contacts/${id}`, {
          method: 'DELETE'
        })
        this.fetchContacts()
      } catch (e) {
        alert('删除失败，请重试')
      }
    },
    async openDetail(item) {
      this.currentDetail = item
      this.showModal = true
      document.body.style.overflow = 'hidden'
      if (!item.is_read && item.id) {
        try {
          await fetch(`http://localhost:3000/api/contacts/${item.id}/read`, {
            method: 'PATCH'
          })
          const target = this.contacts.find(c => c.id === item.id)
          if (target) target.is_read = 1
        } catch (e) {
          console.error('标记已读失败', e)
        }
      }
    },
    closeDetail() {
      this.showModal = false
      document.body.style.overflow = ''
    },
    formatTime(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp)
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    },
    loadHomeConfig() {
      const saved = localStorage.getItem('homeConfig')
      if (saved) {
        try {
          this.homeConfig = JSON.parse(saved)
        } catch (e) {}
      }
    },
    async saveHomeConfig() {
      try {
        const res = await fetch('http://localhost:3000/api/config/homepage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.homeConfig)
        })
        if (res.ok) {
          this.saveSuccess = true
          setTimeout(() => { this.saveSuccess = false }, 3000)
        } else {
          alert('保存失败，请重试')
        }
      } catch (e) {
        alert('网络错误，请检查后端是否启动')
      }
    },
    logout() {
      this.$router.push('/admin/login')
    }
  }
}
</script>

<style scoped>
/* ===== 整体布局 ===== */
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f5f7fa;
}

/* ===== 侧边栏 ===== */
.sidebar {
  width: 220px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  flex-shrink: 0;
  border-right: 1px solid #e8ecf1;
  padding: 24px 0 16px;
}

.sidebar-top {
  padding: 0 20px 20px;
  border-bottom: 1px solid #e8ecf1;
}
.admin-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.admin-avatar {
  font-size: 28px;
}
.admin-name {
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
}
.btn-logout {
  width: 100%;
  background: #f1f4f9;
  color: #475569;
  border: none;
  padding: 8px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
}
.btn-logout:hover {
  background: #e2e8f0;
}

.sidebar-nav {
  flex: 1;
  padding: 16px 12px 0;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  color: #475569;
  text-decoration: none;
  font-size: 14px;
  transition: 0.2s;
  cursor: pointer;
  position: relative;
}
.nav-item:hover {
  background: #f1f4f9;
  color: #1e293b;
}
.nav-item.active {
  background: #eef6ff;
  color: #1d4ed8;
}
.nav-icon {
  font-size: 18px;
  width: 24px;
}
.nav-badge {
  font-size: 11px;
  background: #ef4444;
  color: #fff;
  padding: 0 8px;
  border-radius: 30px;
  margin-left: auto;
  min-width: 20px;
  text-align: center;
  line-height: 20px;
}

/* ===== 主内容区 ===== */
.main-content {
  flex: 1;
  padding: 28px 36px 40px;
}

/* ===== 统计卡片 ===== */
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}
.stat-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px 24px;
  border: 1px solid #e8ecf1;
}
.stat-number {
  font-size: 32px;
  font-weight: 700;
  color: #0f3b5e;
}
.stat-label {
  font-size: 14px;
  color: #94a3b8;
  margin-top: 2px;
}

/* ===== 快捷入口 ===== */
.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.quick-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid #e8ecf1;
  cursor: pointer;
  transition: 0.25s;
}
.quick-card:hover {
  border-color: #3b9eff;
  box-shadow: 0 4px 16px rgba(59, 158, 255, 0.10);
}
.quick-icon {
  font-size: 28px;
}
.quick-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}
.quick-card p {
  font-size: 14px;
  color: #94a3b8;
  margin: 2px 0 0;
}
.quick-arrow {
  margin-left: auto;
  font-size: 20px;
  color: #cbd5e1;
}

/* ===== 留言列表 ===== */
.list-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.list-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
}
.list-count {
  font-size: 14px;
  color: #94a3b8;
}
.btn-refresh {
  background: #f1f4f9;
  border: none;
  padding: 4px 16px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  color: #475569;
}
.btn-refresh:hover {
  background: #e2e8f0;
}

.loading,
.empty {
  text-align: center;
  color: #94a3b8;
  padding: 60px 0;
}

.table-wrapper {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e8ecf1;
  overflow: auto;
}
.contact-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.contact-table thead th {
  text-align: left;
  padding: 14px 16px;
  background: #f8fafc;
  color: #64748b;
  font-weight: 600;
  font-size: 13px;
  border-bottom: 1px solid #e8ecf1;
}
.contact-table tbody td {
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5f9;
  color: #1e293b;
}
.contact-table tbody tr:hover {
  background: #fafcff;
}

.col-name {
  font-weight: 600;
  color: #0f3b5e;
}
.col-phone {
  color: #475569;
}
.col-preview {
  color: #64748b;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.col-time {
  color: #94a3b8;
  font-size: 13px;
}

.status-badge {
  display: inline-block;
  padding: 2px 12px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 500;
}
.status-badge.unread {
  background: #fef3c7;
  color: #d97706;
}
.status-badge.read {
  background: #dcfce7;
  color: #16a34a;
}

.col-actions {
  display: flex;
  gap: 8px;
}
.btn-detail {
  background: #eef6ff;
  color: #1d4ed8;
  border: none;
  padding: 4px 14px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
}
.btn-detail:hover {
  background: #dbeafe;
}
.btn-delete {
  background: #fef2f2;
  color: #dc2626;
  border: none;
  padding: 4px 14px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
}
.btn-delete:hover {
  background: #fee2e2;
}

/* ===== 首页配置 ===== */
.config-header {
  margin-bottom: 16px;
}
.config-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
}
.config-body {
  background: #ffffff;
  border-radius: 12px;
  padding: 28px 32px;
  border: 1px solid #e8ecf1;
}
.config-group {
  margin-bottom: 18px;
}
.config-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  margin-bottom: 4px;
}
.config-group input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: 0.2s;
}
.config-group input:focus {
  outline: none;
  border-color: #3b9eff;
  box-shadow: 0 0 0 4px rgba(59, 158, 255, 0.08);
}
.config-row {
  display: flex;
  gap: 12px;
}
.config-row input {
  flex: 1;
}

.btn-save {
  background: #3b9eff;
  color: #fff;
  border: none;
  padding: 10px 32px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 4px;
}
.btn-save:hover {
  background: #1e7fd6;
}
.save-tip {
  margin-left: 16px;
  color: #16a34a;
  font-weight: 500;
}

/* ===== 详情弹窗 ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}
.modal-box {
  background: #fff;
  max-width: 480px;
  width: 100%;
  padding: 36px 32px 28px;
  border-radius: 20px;
  position: relative;
  animation: modalIn 0.2s ease;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
}
@keyframes modalIn {
  from {
    transform: scale(0.94) translateY(16px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
.modal-close {
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  font-size: 24px;
  color: #94a3b8;
  cursor: pointer;
}
.modal-close:hover {
  color: #1e293b;
}
.modal-icon {
  font-size: 36px;
  margin-bottom: 4px;
}
.modal-title {
  font-size: 22px;
  font-weight: 700;
  color: #0f3b5e;
  margin-bottom: 2px;
}
.modal-phone {
  font-size: 15px;
  color: #475569;
  margin-bottom: 14px;
}
.modal-content {
  background: #f8fafc;
  padding: 16px 18px;
  border-radius: 10px;
  margin-bottom: 14px;
  border-left: 4px solid #3b9eff;
}
.modal-content p {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #334155;
}
.modal-time {
  font-size: 13px;
  color: #94a3b8;
  margin-bottom: 18px;
}
.modal-btn {
  width: 100%;
  background: #3b9eff;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
.modal-btn:hover {
  background: #1e7fd6;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .sidebar {
    width: 64px;
    padding: 16px 0;
  }
  .admin-info {
    flex-direction: column;
    align-items: center;
  }
  .admin-name {
    display: none;
  }
  .sidebar-nav .nav-item span:not(.nav-icon) {
    display: none;
  }
  .nav-badge {
    display: none !important;
  }
  .btn-logout {
    font-size: 0;
    padding: 8px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .btn-logout::after {
    content: "🚪";
    font-size: 18px;
  }
  .main-content {
    padding: 16px;
  }
  .stats {
    grid-template-columns: 1fr 1fr;
  }
  .quick-actions {
    grid-template-columns: 1fr;
  }
  .contact-table {
    font-size: 13px;
  }
  .col-actions {
    flex-direction: column;
    gap: 4px;
  }
  .config-row {
    flex-direction: column;
  }
}
</style>