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

  async getById(id: string): Promise<Product> {
    const product = await this.productModel.findUnique({
      where: {
        id,
      },
    })

    if (!product) {
      throw new Error('Product not found')
    }

    return product
  }

  async create(product: IProduct): Promise<Product> {
    const createdProduct = await this.productModel.create({
      data: product,
    })

    if (!createdProduct) {
      throw new Error('Product not created')
    }

    return createdProduct
  }

  async update(id: string, product: IProduct): Promise<Product> {
    const updatedProduct = await this.productModel.update({
      where: {
        id,
      },
      data: product,
    })

    if (!updatedProduct) {
      throw new Error('Product not updated')
    }

    return updatedProduct
  }

  async delete(id: string): Promise<void> {
    const deletedProduct = await this.productModel.delete({
      where: {
        id,
      },
    })

    if (!deletedProduct) {
      throw new Error('Product not deleted')
    }
  }
}
