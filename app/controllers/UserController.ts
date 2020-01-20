import { ParameterizedContext, Next } from 'koa'

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
  static async login (ctx: ParameterizedContext, next: Next): Promise<void> {
    const username: string = ctx.request.body.username
    const password: string = ctx.request.body.password
    console.log('username', username)
    console.log('password', password)
    if (username !== 'admin') {
      ctx.status = 404
      ctx.body = {
        msg: '用户不存在'
      }
    } else if (username !== password) {
      ctx.status = 400
      ctx.body = {
        msg: '用户名或密码错误'
      }
    } else {
      ctx.status = 200
      ctx.body = {
        msg: '登录成功',
        time: new Date()
      }
    }
    await next()
  }
}

export default UserController
