import { BadRequestError } from '@src/util/error/BadRequestError';
import FavoriteRepository from '@src/core/repository/FavoriteRepository';
import UserRepository from '@src/core/repository/UserRepository';

export default class FindFavoriteByUserId {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly favoriteRepository: FavoriteRepository,
  ) {}

  async execute(user_id: string) {
    const user = await this.userRepository.findById(user_id);
    if (!user) {
      throw new BadRequestError('User not found');
    }

    return await this.favoriteRepository.findByUserId(user_id);
  }
}
