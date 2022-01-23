import 'dotenv/config';
import '../util/module-alias';
import { server } from '@src/infra/http/ServerConfig';

const PORT = process.env.PORT || 5002;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
