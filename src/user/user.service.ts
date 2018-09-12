import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserByUsername(username: string): Promise<User> {
    return (await this.userRepository.find({ username }))[0];
  }

  async createUser(user: User): Promise<User> {
    user.passwordHash = await this.getHash(user.password);

    // clear password as we don't persist passwords
    user.password = undefined;
    return this.userRepository.save(user);
  }

  async getHash(password: string|undefined): Promise<string> {
      return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}