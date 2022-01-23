import { BadRequestError } from '@src/util/error/BadRequestError';
import FavoriteRepository from '@src/core/repository/FavoriteRepository';

export default class DeleteFavorite {
  constructor(private readonly favoriteRepository: FavoriteRepository) {}

  async execute(id: string) {
    const favorite = await this.favoriteRepository.findById(id);
    if (!favorite) {
      throw new BadRequestError('Title not found');
    }

    await this.favoriteRepository.delete(id);

    return {
      status: 201,
      message: 'Title deleted successfully',
    };
  }
}
