import { Request, Response } from 'express'
import { UserServices } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { ...userData } = req.body
    const result = await UserServices.createUser(userData)

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    })
  }
}

export const UserController = {
  createUser,
}
