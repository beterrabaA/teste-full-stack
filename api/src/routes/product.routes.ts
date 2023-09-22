import { Router } from 'express'
import ProductController from '../controllers/product.controller'
import JWTMiddleware from '../middlewares/auth'

export default class ProductRouter {
  public router: Router
  private controller: ProductController
  private auth: JWTMiddleware
  constructor() {
    this.router = Router()
    this.controller = new ProductController()
    this.auth = new JWTMiddleware()
    this.initializeMiddlewares()
  }

  public initializeMiddlewares() {
    this.router.use(this.auth.validateJWT)
  }

  public initializeRoutes() {
    this.router.get('/', this.controller.getAll.bind(this.controller))
  }
}
