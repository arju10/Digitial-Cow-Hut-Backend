import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import routes from './app/routes'
import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()
const port = 3000

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/', routes)

// Test ApiError
app.get('/', (req: Request, res: Response) => {
  throw new ApiError(400, 'Ore Baba Error')
})

// Testing
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!')
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app
