const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

// Body parser，用来封装 req.body
app.use(bodyParser.json())

// Sessions 来创建 req.session
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// 发起 POST /api/login 请求完成用户登录，并添加该用户到 req.session.authUser
app.post('/api/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

// 发起 POST /api/logout 请求注销当前用户，并从 req.session 中移除
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

// 我们用这些选项初始化 Nuxt.js：
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// 生产模式不需要 build
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(8888)//这个地方端口号要与你package.json文件里设置的服务端口号一致
console.log('Server is listening on http://localhost:8888')