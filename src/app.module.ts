import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'test-exchange',
          type: 'topic',
        },
      ],
      uri: 'amqp://rabbit:rabbit@queue:5672',
    }),
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
