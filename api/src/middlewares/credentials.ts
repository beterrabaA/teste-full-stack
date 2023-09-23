import { NextFunction, Request, Response } from 'express'

export default class Credentials {
  public validateCredentials = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { email, password } = req.body

    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    if (email === '' || !emailFormat.test(email)) {
      return res.status(401).json({ message: 'Invalid email' })
    }

    if (password.length < 6) {
      return res.status(401).json({ message: 'Invalid password' })
    }
    next()
  }
}
