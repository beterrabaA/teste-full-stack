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

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const product = await this.service.getById(id)
      return res.status(200).json(product)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  public async create(req: CustomRequest, res: Response): Promise<Response> {
    const { userId } = req
    const { name, description, category, price } = req.body

    if (!userId) {
      return res.status(401).json({ message: 'user id empty' })
    }
    try {
      const bodyProduct = {
        createdById: userId,
        name,
        description,
        category,
        price,
      }
      const newProduct = await this.service.create(bodyProduct)
      return res.status(201).json(newProduct)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  public async update(req: CustomRequest, res: Response): Promise<Response> {
    const { userId } = req
    const { name, description, category, price } = req.body

    if (!userId) {
      return res.status(401).json({ message: 'user id empty' })
    }

    try {
      const bodyProduct = {
        createdById: userId,
        name,
        description,
        category,
        price,
      }

      const updatedProduct = await this.service.update(userId, bodyProduct)
      return res.status(201).json(updatedProduct)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}
