import { HttpStatusCodes } from '../enum/HttpStatusCodes';
import { CustomError } from './CustomError';

export class UnauthorizedError extends CustomError {
  statusCode = HttpStatusCodes.UNAUTHORIZED;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return [{ status: this.statusCode, message: this.message }];
  }
}
