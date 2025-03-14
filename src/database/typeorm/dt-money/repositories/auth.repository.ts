import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import {
  UserRepositoryInterface,
  CreateUserParams,
} from "../../../../domain/user/repositoryInterface/user-repository.interface";
import { Repository } from "typeorm";

export class UserTypeormRepository implements UserRepositoryInterface {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async createUser(user: CreateUserParams): Promise<User> {
    try {
      const userCreated = await this.userRepository.save(user);
      return userCreated;
    } catch (error) {
      throw new Error("Falha ao criar o usuário!");
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      throw new Error("Falha ao buscar isiário!");
    }
  }
}
