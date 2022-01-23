import { NotFoundError } from '@src/util/error/NotFoundError';
import FavoriteRepository from '@src/core/repository/FavoriteRepository';

export default class UpdateFavorite {
  constructor(private readonly favoriteRepository: FavoriteRepository) {}

  async execute(
    id: string,
    user_id: string,
    title: string,
    category: string,
    season: number,
    episode: number,
  ) {
    const favorite = await this.favoriteRepository.findById(id);
    if (!favorite) {
      throw new NotFoundError('Title not found');
    }

    await this.favoriteRepository.update(
      id,
      user_id,
      title,
      category,
      season,
      episode,
    );

    return {
      status: 201,
      message: 'Title updated successfully',
    };
  }
}
