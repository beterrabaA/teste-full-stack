import prismadb from '../lib/prismadb'
import { Product } from '@prisma/client'

export default class ProductService {
  private productModel
  constructor() {
    this.productModel = prismadb.product
  }
}
