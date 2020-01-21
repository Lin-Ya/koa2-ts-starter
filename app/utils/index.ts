import { Context } from 'koa'
/**
 * 正常发送响应时使用此函数
 */
export function setRes (
  this: Context,
  data: object | null,
  msg = 'OK',
  code = 200
): void {
  this.status = code
  const time = new Date()
  this.body = { data: data || {}, msg, code, time }
}
