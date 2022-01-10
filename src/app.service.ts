import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'test-exchange',
    routingKey: 'test-routing',
    queue: 'test-messages',
  })
  public async pubSubHandler(msg: {}) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }

  getHello(): string {
    return 'Hello World 3001!';
  }
}
