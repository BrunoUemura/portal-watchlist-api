import { BadRequestError } from "../../../shared/error/BadRequestError";
import FavoriteRepository from "../../repository/FavoriteRepository";

export default class FindFavoriteByTitle {
  private favoriteRepository: FavoriteRepository;

  constructor(favoriteRepository: FavoriteRepository) {
    this.favoriteRepository = favoriteRepository;
  }

  async execute(title: string) {
    return await this.favoriteRepository.findByTitle(title);
  }
}
