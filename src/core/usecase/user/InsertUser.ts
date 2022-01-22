import { BadRequestError } from "../../../shared/error/BadRequestError";
import IUserInsert from "../../interface/UserInterfaces";
import UserRepository from "../../repository/UserRepository";

export default class InsertUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ id, username, email }: IUserInsert) {
    const userExist = await this.userRepository.findByUsername(username);

    if (userExist) {
      throw new BadRequestError("User already registered");
    }

    await this.userRepository.insert(id, username, email);

    return {
      status: 201,
      message: "User registered successfully",
    };
  }
}
