import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import routes from './app/routes'
const app: Application = express()
const port = 3000

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/', routes)

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
