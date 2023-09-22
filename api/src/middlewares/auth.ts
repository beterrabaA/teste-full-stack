import { NextFunction, Response } from 'express'
import { tokenDecoder } from '../utils/token'
import UserService from '../services/user.service'
import { CustomRequest, IUser } from '../types'

export default class TokenValidator {
  private service: UserService

  constructor() {
    this.service = new UserService()
  }

  public validateJWT = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const token = req.headers.authorization
    if (!token) return res.status(401).json({ message: 'Token not found' })

    try {
      const decoded = tokenDecoder(token) as IUser
      const loggedUser = await this.service.getUserById(decoded.id)

      if (!loggedUser) {
        return res.status(401).json({ message: 'Token must be a valid token' })
      }

      req.userId = loggedUser.id
      next()
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' })
    }
  }
}
