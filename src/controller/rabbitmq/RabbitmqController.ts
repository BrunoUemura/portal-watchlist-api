import InsertUser from '../../core/usecase/user/InsertUser';
import UserRepositoryPostgreSQL from '../../infra/database/postgres/repository/UserRepositoryPostgreSQL';

type IUsersCreate = {
  type: string;
  id: string;
  username: string;
  email: string;
  password?: string;
};

export default class RabbitmqController {
  static async handleEvent(message: IUsersCreate) {
    const userRepositoryPostgreSQL = new UserRepositoryPostgreSQL();
    const insertUser = new InsertUser(userRepositoryPostgreSQL);

    switch (message.type) {
      case 'UserCreation':
        const user = {
          id: message.id,
          username: message.username,
          email: message.email,
        };
        await insertUser.execute(user);
        break;

      default:
        console.log(`No action on event`);
        break;
    }
  }
}
