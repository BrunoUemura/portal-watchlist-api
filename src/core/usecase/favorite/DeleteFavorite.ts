import { BadRequestError } from "../../../shared/error/BadRequestError";
import FavoriteRepository from "../../repository/FavoriteRepository";

export default class DeleteFavorite {
  private favoriteRepository: FavoriteRepository;

  constructor(favoriteRepository: FavoriteRepository) {
    this.favoriteRepository = favoriteRepository;
  }

  async execute(id: string) {
    const favorite = await this.favoriteRepository.findById(id);
    if (!favorite) {
      throw new BadRequestError("Title not found");
    }

    await this.favoriteRepository.delete(id);

    return {
      status: 201,
      message: "Title deleted successfully",
    };
  }
}
