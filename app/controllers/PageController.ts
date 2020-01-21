import { Context } from 'koa'

class PageController {
  public static async Page (ctx: Context): Promise<void> {
    const title = '这是标题'
    await ctx.render('index', {
      title
    })
  }
}

export default PageController
