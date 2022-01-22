import FavoriteRepository from "../../repository/FavoriteRepository";

export default class FindFavoriteByCategory {
  private favoriteRepository: FavoriteRepository;

  constructor(favoriteRepository: FavoriteRepository) {
    this.favoriteRepository = favoriteRepository;
  }

  async execute(category: string) {
    return await this.favoriteRepository.findByCategory(category);
  }
}
