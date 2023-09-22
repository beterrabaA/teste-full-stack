import prismadb from '../lib/prismadb'
import { User } from '@prisma/client'

export default class UserService {
  private userModel
  constructor() {
    this.userModel = prismadb.user
  }

  public async register(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const newUser = await this.userModel.create({
      data: {
        email,
        username,
        password,
      },
    })
    console.log('registering user')
    return newUser
  }
}
