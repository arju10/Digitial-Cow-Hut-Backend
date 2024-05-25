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

// Get Single User By ID ==== API: ("/api/v1/users/:id") === Method :[ GET]
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await UserServices.getSingleUser(id)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single user retrieved successfully',
    data: result,
  })
})

// Update Single User By ID ==== API: ("/api/v1/users/:id") === Method :[ GET]
const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const updatedData = req.body
  const result = await UserServices.updateSingleUser(id, updatedData)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated successfully',
    data: result,
  })
})
export const UserController = {
  createUser,
  getSingleUser,
  updateSingleUser,
}
