import User from '../entity/User';

export default interface UserRepository {
  findById(id: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  insert(id: string, username: string, email: string): Promise<User>;
}
