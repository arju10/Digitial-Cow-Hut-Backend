import { IUser } from './user.interface'
import { User } from './user.model'

// Create a user  ==== API: ("/api/v1/users/signup") === Method :[ POST]
const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload)
  return result
}

// Get Single User By ID ==== API: ("/api/v1/users/:id") === Method :[ GET]
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id)
  return result
}

export const UserServices = {
  createUser,
  getSingleUser,
}
