import { HttpStatusCodes } from '../enum/HttpStatusCodes';
import { CustomError } from './CustomError';

export default class BrokerConnectionError extends CustomError {
  statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR;
  reason = 'Broker Connection Error';

  constructor() {
    super('Broker Connection Error');
    Object.setPrototypeOf(this, BrokerConnectionError.prototype);
  }

  serializeErrors() {
    return [{ status: this.statusCode, message: this.message }];
  }
}
