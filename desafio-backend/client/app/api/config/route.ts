import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body
  const { token } = body
  res.setHeader('Authorization', token)
  res.status(200).json({ message: 'Hello from Next.js!' })
}