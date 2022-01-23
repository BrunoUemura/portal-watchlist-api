import Favorite from '@src/core/entity/Favorite';

export default interface FavoriteRepository {
  findById(id: string): Promise<Favorite>;
  findByUserId(id: string): Promise<Favorite[]>;
  findByTitle(title: string): Promise<Favorite>;
  findByCategory(category: string): Promise<Favorite>;
  insert(
    id: string,
    user_id: string,
    title: string,
    category: string,
    season: number,
    episode: number,
  ): Promise<Favorite>;
  update(
    id: string,
    user_id: string,
    title: string,
    category: string,
    season: number,
    episode: number,
  ): Promise<Favorite>;
  delete(id: string): Promise<void>;
}
