import { DB, Schema } from '../mongoDB'

const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      required: true,
      unique: true
    },
    password: {
      type: Schema.Types.String,
      required: true
    }
  },
  {
    versionKey: false
  }
)

const userModel = DB.model('user', userSchema, 'user')

export default userModel
