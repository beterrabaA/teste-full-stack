import 'dotenv/config'

import { sign, verify } from 'jsonwebtoken'

interface User {
  email: string
  password: string
}
