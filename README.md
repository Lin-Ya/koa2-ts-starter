# 简介

这是一个练习`Typescript`和`koa2`的项目，`./templates`是模板渲染资源目录，也包含了对应的ejs模板渲染。
`db`分支对应的是使用MySQL数据库，`mongodb`分支对应的则是使用MongoDB数据库。

`./.vacode/launch.json`文件用于使用vscode自带调试器进行调试的配置文件。

# 使用
`npm i` 安装依赖
`npm run run` 构建完成后的运行指令
`npm run build` 打包api文档和生产代码
`npm run watch` 热加载开发
`npm run generate-api` 生成api文档（当有任何变动都会自动打包api文档）
`npm run dev` 热加载开发
`npm run debugger` 断电调试模式