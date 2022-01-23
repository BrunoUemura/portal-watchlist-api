import { Request } from 'express';
import { BadRequestError } from '@src/util/error/BadRequestError';

export default class RequestValidation {
  static async validate(request: Request) {
    const body = request.body;

    try {
      if (request.method === 'POST' || request.method === 'PUT') {
        await this.validateBody(body);
      }
    } catch (error) {
      throw error;
    }
  }

  static async validateBody(body) {
    const isEmpty = Object.keys(body).length === 0;

    if (isEmpty) {
      throw new BadRequestError('Missing request body content');
    }
    if (!body.user_id) {
      throw new BadRequestError('Missing user_id in request body');
    }
    if (!body.title) {
      throw new BadRequestError('Missing title in request body');
    }
    if (!body.category) {
      throw new BadRequestError('Missing category in request body');
    }
    if (!body.season) {
      throw new BadRequestError('Missing season in request body');
    }
    if (!body.episode) {
      throw new BadRequestError('Missing episode in request body');
    }
  }
}
