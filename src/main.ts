import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // 목록에 없는것은 받지 않음
      transform: true, // 요청하는 값을 변환할 수 있음
    }),
  );
  await app.listen(3000);
}
bootstrap();
