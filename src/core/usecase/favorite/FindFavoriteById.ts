import FavoriteRepository from '../../repository/FavoriteRepository';

export default class FindFavoriteById {
  constructor(private readonly favoriteRepository: FavoriteRepository) {}

  async execute(id: string) {
    return await this.favoriteRepository.findById(id);
  }
}
