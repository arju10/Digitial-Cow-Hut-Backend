import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  console.log('uncaught exception is detected .............')
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is connected successfully`)

    // Server is running
    app.listen(config.port, () => {
      logger.info(`Server is running on port http://localhost:${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect Database', error)
  }

  process.on('uncaughtException', error => {
    console.log(
      'uncaught exception is detected , we are closing server ............',
    )
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
