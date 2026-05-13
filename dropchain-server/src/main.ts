import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // strips unknown fields
    forbidNonWhitelisted: true,  // throws on unknown fields
    transform: true,        // enables @Type() transformations
  }));
  await app.listen(process.env.PORT ?? 3000);
}
start().catch((err) => {
  console.error(err);
});
