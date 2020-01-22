import { Context, Next } from 'koa'
import User from '../models/User'

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
      console.log('username', username)
      console.log('password', password)
      const result = await User.findOne({
        where: {
          username
        }
      })
      console.log(result)
      if (!result) {
        ctx.setRes(null, '用户不存在', 404)
        return
      }
      if (result.dataValues.password !== password) {
        ctx.setRes(null, '用户名或密码错误', 400)
      } else {
        const user = Object.assign({}, result.dataValues)
        delete user.password
        ctx.setRes({ user }, '登录成功', 200)
      }
    } catch (error) {
      ctx.status = 500
      ctx.body = error
    }
    await next()
  }
}

export default UserController
