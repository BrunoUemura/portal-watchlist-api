import FavoriteRepository from '@src/core/repository/FavoriteRepository';

export default class FindFavoriteByTitle {
  constructor(private readonly favoriteRepository: FavoriteRepository) {}

  async execute(title: string) {
    return await this.favoriteRepository.findByTitle(title);
  }
}
