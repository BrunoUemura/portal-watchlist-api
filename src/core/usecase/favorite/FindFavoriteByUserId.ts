import { BadRequestError } from "../../../shared/error/BadRequestError";
import FavoriteRepository from "../../repository/FavoriteRepository";
import UserRepository from "../../repository/UserRepository";

export default class FindFavoriteByUserId {
  private userRepository: UserRepository;
  private favoriteRepository: FavoriteRepository;

  constructor(
    userRepository: UserRepository,
    favoriteRepository: FavoriteRepository
  ) {
    this.userRepository = userRepository;
    this.favoriteRepository = favoriteRepository;
  }

  async execute(user_id: string) {
    const user = await this.userRepository.findById(user_id);
    if (!user) {
      throw new BadRequestError("User not found");
    }

    return await this.favoriteRepository.findByUserId(user_id);
  }
}
