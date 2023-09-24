import prismadb from '../lib/prismadb'
import { User } from '@prisma/client'
import { hashDecode, hashEncode } from '../utils/hash'

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
    console.log(username, email, password)

    const hashedPwd = hashEncode(password)
    console.log(hashedPwd)
    const newUser = await this.userModel.create({
      data: {
        email,
        username,
        password: hashedPwd,
      },
    })
    console.log(newUser)

    return newUser
  }

  public async login(email: string, password: string): Promise<User> {
    const user = await this.userModel.findUnique({
      where: {
        email,
      },
    })

    if (!user) throw new Error('User not found')
    const vPass = hashDecode(password, user.password)
    if (!vPass) throw new Error('Password invalid')

    return user
  }

  public async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findUnique({
      where: {
        id,
      },
    })

    if (!user) throw new Error('User not found')
    return user
  }
}
