import { IUser } from './user.interface'
import { User } from './user.model'

// Create a user  ==== API: ("/api/v1/users/signup") === Method :[ POST]
const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload)
  return result
}

export const UserServices = {
  createUser,
}
