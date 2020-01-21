import { DefaultState, Context } from 'koa'
import UserController from '../controllers/UserController'
import { apiPrefix } from '../config/index'
import Router = require('koa-router')

const router = new Router<DefaultState, Context>({
  prefix: apiPrefix
})

router.post('/login', UserController.login)
export default router
