import db from '../db/index'
import * as Sequelize from 'sequelize'

const User: any = db.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: '自增ID'
    },

    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: '昵称'
    },

    username: {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: '用户名'
    },

    password: {
      type: Sequelize.STRING(16),
      allowNull: false,
      comment: '密码'
    },

    Token: {
      type: Sequelize.STRING(100),
      comment: 'Token鉴权验证'
    }
  }
)

User.sync()

export default User
