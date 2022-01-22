import FavoriteRepository from "../../repository/FavoriteRepository";

export default class FindFavoriteById {
  private favoriteRepository: FavoriteRepository;

  constructor(favoriteRepository: FavoriteRepository) {
    this.favoriteRepository = favoriteRepository;
  }

  async execute(id: string) {
    return await this.favoriteRepository.findById(id);
  }
}
