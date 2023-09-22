import { Request, Response } from 'express'
import ProductService from '../services/product.service'
import { CustomRequest } from '../types'

export default class ProductController {
  private service
  constructor() {
    this.service = new ProductService()
  }

  public async getAll(req: CustomRequest, res: Response): Promise<Response> {
    const { userId } = req
    if (!userId) {
      return res.status(401).json({ message: 'user id empty' })
    }
    try {
      const productList = await this.service.getAll(userId)
      return res.status(200).json(productList)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}
