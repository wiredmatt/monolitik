import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// TODO: Detect environment and apply CORS policy to whitelisted frontends only
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT || 4000)
}
bootstrap()
