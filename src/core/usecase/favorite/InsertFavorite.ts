import { v4 as uuid } from "uuid";

import { NotFoundError } from "../../../shared/error/NotFoundError";
import FavoriteRepository from "../../repository/FavoriteRepository";
import UserRepository from "../../repository/UserRepository";

export default class InsertFavorite {
  private userRepository: UserRepository;
  private favoriteRepository: FavoriteRepository;

  constructor(
    userRepository: UserRepository,
    favoriteRepository: FavoriteRepository
  ) {
    this.userRepository = userRepository;
    this.favoriteRepository = favoriteRepository;
  }

  async execute(
    user_id: string,
    title: string,
    category: string,
    season: number,
    episode: number
  ) {
    const user = await this.userRepository.findById(user_id);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    const id = uuid();
    await this.favoriteRepository.insert(
      id,
      user_id,
      title,
      category,
      season,
      episode
    );

    return {
      status: 201,
      message: "Title added successfully",
    };
  }
}