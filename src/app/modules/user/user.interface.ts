import { Model } from 'mongoose'
import { ENUM_USER_ROLE } from '../../../enums/user'

export type UserName = {
  firstName: string
  lastName: string
}
export type IUser = {
  // id: string
  password: string
  role: ENUM_USER_ROLE
  name: UserName
  phoneNumber: string
  address: string
  budget?: number
  income?: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
