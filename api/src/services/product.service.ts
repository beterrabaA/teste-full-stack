import prismadb from '../lib/prismadb'
import { Product } from '@prisma/client'
import { IProduct } from '../types'

export default class ProductService {
  private productModel
  constructor() {
    this.productModel = prismadb.product
  }

  async getAll(userId: string): Promise<Product[]> {
    const productList = await this.productModel.findMany({
      where: {
        createdById: userId,
      },
    })

    if (!productList) {
      throw new Error('No products registered by user')
    }

    return productList
  }
}
