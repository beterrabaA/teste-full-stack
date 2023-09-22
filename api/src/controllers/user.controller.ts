import { Request, Response } from 'express'
import UserService from '../services/user.service'
import { tokenGenerator } from '../utils/token'
import { CustomRequest } from '../types'

export default class UserController {
  private service
  constructor() {
    this.service = new UserService()
  }

  public async register(req: Request, res: Response): Promise<Response> {
    const { username, email, password } = req.body
    try {
      const user = await this.service.register(username, email, password)
      const token = tokenGenerator({
        id: user.id,
        email: user.email,
        password: user.password,
      })
      return res.status(400).json({ token })
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'email already in use or password invalid' })
    }
  }

  public async login(req: CustomRequest, res: Response): Promise<Response> {
    const { email, password } = req.body
    try {
      const user = await this.service.login(email, password)
      const token = tokenGenerator({
        id: user.id,
        email: user.email,
        password: user.password,
      })
      return res.json({ token })
    } catch (error) {
      return res.status(403).json({ message: 'email or password invalid' })
    }
  }
}
