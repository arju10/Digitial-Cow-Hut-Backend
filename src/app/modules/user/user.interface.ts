import { Model } from 'mongoose'

export type UserName = {
  firstName: string
  lastName: string
}
export type IUser = {
  // id: string
  password: string
  role: 'buyer' | 'seller' | 'admin'
  name: UserName
  phoneNumber: string
  address: string
  budget?: number
  income?: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
