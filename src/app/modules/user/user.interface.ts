import { Model } from 'mongoose'

export type UserName = {
  firstName: string
  lastName: string
}

export type IUser = {
  // id: string
  password: string
  role: string
  name: UserName
  phoneNumber: string
  address: string
  income?: number
  budget?: number

  profileImage?: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
