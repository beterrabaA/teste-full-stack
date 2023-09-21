import 'dotenv/config'

import { sign, verify } from 'jsonwebtoken'

interface User {
  email: string
  password: string
}

const secret = process.env.JTW_SECRET as string
