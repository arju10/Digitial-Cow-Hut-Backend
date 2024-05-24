import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import { UserServices } from './user.service'

// Create new Academic Department ==== API: ("/api/v1/users/signup") === Method :[ POST]
const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body
  const result = await UserServices.createUser(userData)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const UserController = {
  createUser,
}
