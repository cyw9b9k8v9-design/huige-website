# 晖格科技官网 - 全栈项目

基于 Vue 3 + Node.js + MySQL 构建的公司官网及后台管理系统。

## 技术栈

- 前端：Vue 3 + Vite
- 后端：Node.js + Express
- 数据库：MySQL
- 开发工具：VS Code、DBeaver

## 本地启动

### 1. 导入数据库

在 MySQL 中创建 `huige_db` 数据库，导入 `huige_db_backup.sql` 文件。

### 2. 启动后端

```bash
cd backend
npm install
node server.js