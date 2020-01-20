import routerPath from './routes'
import path = require('path')
import Koa = require('koa')
import views = require('koa-views')
import statics = require('koa-static')
import bodyParser = require('koa-bodyparser')

const PORT = parseInt(process.env.PORT || '3000')
const listeningListener = (): void => {
  console.log('Node app is running on port:', PORT)

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function (err) {
    console.error('Caught exception:', err.stack)
  })
  process.on('unhandledRejection', function (reason: any, p) {
    console.error(
      'Unhandled Rejection at: Promise ',
      p,
      ' reason: ',
      reason.stack
    )
  })
}

const app = new Koa()
// 设置静态资源目录
app.use(statics(path.join(__dirname, 'public')))
// 设置模板引擎
app.use(views(path.join(__dirname, 'templates')))
// 请求body处理
app.use(bodyParser())
app.use(routerPath.routes())

app.listen(PORT, listeningListener)
