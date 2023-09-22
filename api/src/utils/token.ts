import 'dotenv/config'

import { sign, verify } from 'jsonwebtoken'
import { IUser } from '../types'

const secret = process.env.JTW_SECRET as string

export const tokenGenerator = (payload: IUser) => sign(payload, secret)

export const tokenDecoder = (token: string) => verify(token, secret)
