import { viewPrefix } from '../config/index'
import { DefaultState, Context } from 'koa'
import PageController from '../controllers/PageController'
import Router = require('koa-router')

const router = new Router<DefaultState, Context>({
  prefix: viewPrefix
})

router.get('/page', PageController.Page)
export default router
