import { Request, Response } from 'express'
import UserService from '../services/user.service'

export default class UserController {
  private service
  constructor() {
    this.service = new UserService()
  }

  public async register(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body
    console.log(username, password)

    const user = await this.service.register(username, email, password)
    res.json(user)
  }
}
