import { HttpStatusCodes } from '../enum/HttpStatusCodes';
import { CustomError } from './CustomError';

export class BadRequestError extends CustomError {
  statusCode = HttpStatusCodes.BAD_REQUEST;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ status: this.statusCode, message: this.message }];
  }
}
