import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: "kurt",
      password: "jkrmarmol",
    },
    {
      id: 2,
      username: "admin",
      password: "admin123",
    },
  ];

  async findOne(username: string): Promise<User | any> {
    return this.users.find((user) => user.username === username);
  }
}
