import express, { Application } from 'express'
import cors from 'cors'
import UserRouter from './routes/user.routes'
import ProductRouter from './routes/product.routes'
import { errorMiddleware } from './middlewares/error.middleware'

export default class App {
  public app: Application
  private userRoutes = new UserRouter()
  private productRoutes = new ProductRouter()
  constructor() {
    this.app = express()
    this.configureCors()
    this.middlewaresInitialize()
    this.initialzeRoutes()
    this.interceptionError()
  }

  private interceptionError() {
    this.app.use(errorMiddleware)
  }

  private initialzeRoutes() {
    this.app.use('/user', this.userRoutes.router)
    this.app.use('/product', this.productRoutes.router)
  }

  private middlewaresInitialize() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private configureCors() {
    const corsOptions = {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204,
    }

    this.app.use(cors(corsOptions))
  }

  listen() {
    const PORT = process.env.API_PORT || 3333
    this.app.listen(PORT, () => console.log(`server is running on ${PORT}`))
  }
}
