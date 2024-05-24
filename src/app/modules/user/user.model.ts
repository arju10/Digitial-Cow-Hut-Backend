import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser, UserModel>(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },

    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    income: {
      type: Number,
    },
    budget: {
      type: Number,
    },

    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const User = model<IUser, UserModel>('User', userSchema)
