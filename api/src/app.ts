import express, { Application } from 'express'
import UserRouter from './routes/user.routes'
import ProductRouter from './routes/product.routes'

export default class App {
  public app: Application
  private userRoutes = new UserRouter()
  private productRoutes = new ProductRouter()
  constructor() {
    this.app = express()
    this.middlewaresInitialize()
    this.initialzeRoutes()
  }

  private initialzeRoutes() {
    this.app.use('/user', this.userRoutes.router)
    this.app.use('/product', this.productRoutes.router)
  }

  private middlewaresInitialize() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  listen(port: number | string) {
    this.app.listen(port, () => console.log(`server is running on ${port}`))
  }
}
