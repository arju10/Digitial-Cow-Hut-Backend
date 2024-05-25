import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string(),
    role: z.enum(['buyer', 'seller', 'admin'], {
      required_error: 'Role is required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
    }),
    phoneNumber: z.string({
      required_error: 'Phone number is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    income: z.number().optional(),
    budget: z.number().optional(),
  }),
})

const updateUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    role: z.enum(['buyer', 'seller', 'admin']).optional(),
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    income: z.number().optional(),
    budget: z.number().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
}
