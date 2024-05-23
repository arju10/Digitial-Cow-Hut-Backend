import { z } from 'zod'
import { role } from './user.constant'

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string(),
    role: z.enum([...role] as [string, ...string[]], {
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
    budget: z.number().optional(),
    income: z.number().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
