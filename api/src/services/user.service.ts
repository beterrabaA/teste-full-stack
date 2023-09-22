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

  public async login(email: string, password: string): Promise<User> {
    const user = await this.userModel.findUnique({
      where: {
        email,
      },
    })

    if (!user) throw new Error('User not found')
    const vPass = bcrypt.compareSync(password, user.password)
    if (!vPass) throw new Error('Password invalid')

    return user
  }
}
