import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(payload)

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create User')
  }

  return createdUser
}

export const UserServices = {
  createUser,
}
