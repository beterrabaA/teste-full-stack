import { Request } from 'express'

export interface IUser {
  id: string
  email: string
  password: string
}

export interface CustomRequest extends Request {
  userId?: string
}
