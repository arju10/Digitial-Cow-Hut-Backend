import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constant/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { userFilterableFields } from './user.constant'
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

// Get All Student with pagination ==== API: ("/api/v1/users/?page=1&limit=10") === Method :[ GET]
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await UserServices.getAllUsers(filters, paginationOptions)

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All data are retrieved successfully',
    meta: result.meta,
    data: result.data,
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

// Update Single User By ID ==== API: ("/api/v1/users/:id") === Method :[ PATCH]
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
  getAllUsers,
}
