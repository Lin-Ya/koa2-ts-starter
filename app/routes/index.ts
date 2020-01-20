import UserController from '../controllers/UserController'
import { prefix } from '../config/index'
import Router = require('koa-router')
const router = new Router({
  prefix
})
router.post('/login', UserController.login)

export default router
