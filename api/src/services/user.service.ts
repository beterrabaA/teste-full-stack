import prismadb from '../lib/prismadb'
import bcrypt from 'bcrypt'
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
    const hashedPwd = await bcrypt.hash(password, 12)
    const newUser = await this.userModel.create({
      data: {
        email,
        username,
        password: hashedPwd,
      },
    })
    return newUser
  }
}
