import RabbitmqServer from './RabbitmqServer';
import RabbitmqController from '../../../controller/rabbitmq/RabbitmqController';

(async () => {
  const server = new RabbitmqServer(process.env.RABBITMQ_URL);
  await server.start();
  await server.consume('user', async message => {
    const object = JSON.parse(message.content.toString());
    await RabbitmqController.handleEvent(object);
  });
})();
