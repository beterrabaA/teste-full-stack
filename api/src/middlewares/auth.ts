import { NextFunction, Request, Response } from 'express'

export default class TokenValidator {
  public validateJWT = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const token = req.headers.authorization
    if (!token) return res.status(401).json({ message: 'Token not found' })
  }
}
