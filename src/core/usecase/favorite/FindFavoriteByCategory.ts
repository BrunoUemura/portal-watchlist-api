import FavoriteRepository from '@src/core/repository/FavoriteRepository';

export default class FindFavoriteByCategory {
  constructor(private readonly favoriteRepository: FavoriteRepository) {}

  async execute(category: string) {
    return await this.favoriteRepository.findByCategory(category);
  }
}
