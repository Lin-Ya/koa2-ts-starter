import { Context, Next } from 'koa'
import { userModel } from '../models'

/**
 * @apiDefine User UserGroup
 */

class UserController {
  /**
   * @api {POST} /login 登录
   * @apiDescription 账号密码登录
   * @apiGroup User
   * @apiName login
   * @apiParam {String} username 用户名
   * @apiParam {String} password 密码
   * @apiSuccessExample {json} Success-Response:
   * {
   * "code": 200,
   * "msg": "success",
   * "time": 2019-01-01 01:01:01
   * "data": {
   *      "user": {}
   *  }
   * }
   * @apiErrorExample {json} Error-Response:
   * {
   * "code": 400,
   * "msg": "login fail"
   * "time": 2019-01-01 01:01:01
   * }
   * @apiVersion 1.0.0
   */
  public static async login (ctx: Context, next: Next): Promise<void> {
    try {
      console.log(ctx.setRes)
      const username: string = ctx.request.body.username
      const password: string = ctx.request.body.password
      const _user = await userModel.findOne({ username })
      if (!_user) {
        ctx.setRes(null, '用户不存在', 404)
      } else if (password !== _user.get('password')) {
        ctx.setRes(null, '用户名或密码错误', 400)
      } else {
        ctx.setRes(
          {
            user: {
              username
            }
          },
          '登录成功',
          200
        )
      }
    } catch (error) {
      ctx.body = error
    }
    await next()
  }

  /**
   * @api {POST} /registe 注册
   * @apiDescription 账号密码登录
   * @apiGroup User
   * @apiName registe
   * @apiParam {String} username 用户名
   * @apiParam {String} password 密码
   * @apiSuccessExample {json} Success-Response:
   * {
   * "code": 200,
   * "msg": "success",
   * "time": 2019-01-01 01:01:01
   * "data": {
   *      "user": {}
   *  }
   * }
   * @apiErrorExample {json} Error-Response:
   * {
   * "code": 400,
   * "msg": "login fail"
   * "time": 2019-01-01 01:01:01
   * }
   * @apiVersion 1.0.0
   */
  public static async registe (ctx: Context, next: Next): Promise<void> {
    try {
      const username: string = ctx.request.body.username
      const password: string = ctx.request.body.password
      const existUser = await userModel.findOne({ username })
      if (existUser) {
        return ctx.setRes(null, '用户已存在', 401)
      }
      if (username.length < 3 || username.length > 10) {
        return ctx.setRes(null, '用户名长度应3至10位之间', 400)
      }
      if (password.length < 6 || password.length > 20) {
        return ctx.setRes(null, '密码长度应在6至20之间', 400)
      }
      const _user = await userModel.create({ username, password })
      ctx.setRes(
        { user: { username: _user.get('username') } },
        '创建用户成功',
        201
      )
    } catch (error) {
      console.log(error)
      ctx.setRes(error, error.message, 500)
    } finally {
      await next()
    }
  }
}

export default UserController
