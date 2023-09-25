import 'dotenv/config'

import { sign, verify } from 'jsonwebtoken'
import { IUser } from '../types'

const secret = process.env.JWT_SECRET as string

export const tokenGenerator = (payload: IUser): string => sign(payload, secret)

export const tokenDecoder = (token: string) => verify(token, secret)
