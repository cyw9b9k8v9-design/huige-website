const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 连接 MySQL 数据库
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yaobo20020228.',
  database: 'huige_db'
});

db.connect((err) => {
  if (err) {
    console.error('数据库连接失败：', err);
  } else {
    console.log('✅ MySQL 已连接');
  }
});

// 测试接口
app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

// 查询所有留言
app.get('/api/contacts', (req, res) => {
  db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// 新增留言
app.post('/api/contacts', (req, res) => {
  const { name, phone, content } = req.body;
  if (!name || !phone || !content) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  const sql = 'INSERT INTO contacts (name, phone, content) VALUES (?, ?, ?)';
  db.query(sql, [name, phone, content], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: '留言提交成功', id: result.insertId });
    }
  });
});
// 删除留言
app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM contacts WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: '留言不存在' });
    } else {
      res.json({ message: '删除成功' });
    }
  });
});
// 获取首页配置
app.get('/api/config/homepage', (req, res) => {
  db.query("SELECT config_value FROM config WHERE config_key = 'homepage'", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ error: '配置未找到' });
    } else {
      try {
        const data = JSON.parse(results[0].config_value);
        res.json(data);
      } catch (e) {
        res.status(500).json({ error: '配置数据格式错误' });
      }
    }
  });
});

// 更新首页配置
app.post('/api/config/homepage', (req, res) => {
  const { title, subtitle, modules } = req.body;
  if (!title || !subtitle || !modules) {
    return res.status(400).json({ error: '缺少必要字段' });
  }
  const configValue = JSON.stringify({ title, subtitle, modules });
  db.query(
    "UPDATE config SET config_value = ? WHERE config_key = 'homepage'",
    [configValue],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: '配置不存在' });
      } else {
        res.json({ message: '更新成功' });
      }
    }
  );
});
// 标记留言为已读
app.patch('/api/contacts/:id/read', (req, res) => {
  const { id } = req.params;
  db.query('UPDATE contacts SET is_read = 1 WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: '留言不存在' });
    } else {
      res.json({ message: '已标记为已读' });
    }
  });
});
app.listen(port, () => {
  console.log(`后端服务已启动：http://localhost:${port}`);
});