import { NestFactory } from '@nestjs/core';
import { FeedbackModule } from './feedback.module';

async function bootstrap() {
  const app = await NestFactory.create(FeedbackModule);
  await app.listen(3000);
}
bootstrap();
