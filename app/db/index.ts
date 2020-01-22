import { Sequelize } from 'sequelize'

const db = new Sequelize({
  database: 'demo',
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  port: 3306,
  password: 'rootroot',
  timezone: '+08:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

;(async (): Promise<void> => {
  try {
    await db.authenticate()
    console.log('数据库连接成功')
  } catch (error) {
    console.log('数据库连接失败', error)
  }
})()

export default db
