import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

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
}

bootstrap()
