import RabbitmqServer from '@src/infra/queue/rabbitmq/RabbitmqServer';
import RabbitmqController from '@src/controller/rabbitmq/RabbitmqController';

(async () => {
  const server = new RabbitmqServer(process.env.RABBITMQ_URL);
  await server.start();
  await server.consume('user', async message => {
    const object = JSON.parse(message.content.toString());
    await RabbitmqController.handleEvent(object);
  });
})();
