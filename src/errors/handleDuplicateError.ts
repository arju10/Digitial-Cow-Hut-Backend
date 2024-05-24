import { IGenericErrorResponse } from '../interface/common'
import { IGenericErrorMessage } from '../interface/error'

const handleDuplicateError = (error: any): IGenericErrorResponse => {
  const statusCode = 409 // Conflict
  const message = 'Duplicate field value entered'
  const errorMessages: IGenericErrorMessage[] = Object.keys(error.keyValue).map(
    key => {
      return {
        path: key,
        message: `${key} must be unique`,
      }
    },
  )

  return {
    statusCode,
    message,
    errorMessages,
  }
}

export default handleDuplicateError
