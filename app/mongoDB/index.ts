import * as mongoose from 'mongoose'
import { dbConfig } from '../config'

export const DB = mongoose
export const { Schema } = DB

export const dbConnect = async (): Promise<mongoose.Mongoose> => {
  try {
    await DB.connect(dbConfig.url)
    console.log('数据库连接成功')
  } catch (error) {
    console.log('数据库连接失败', error)
  }
  return DB
}
