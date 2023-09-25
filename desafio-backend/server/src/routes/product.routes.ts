import { Router } from 'express'
import ProductController from '../controllers/product.controller'
import JWTMiddleware from '../middlewares/auth.middleware'

export default class ProductRouter {
  public router: Router
  private controller: ProductController
  private auth: JWTMiddleware
  constructor() {
    this.router = Router()
    this.controller = new ProductController()
    this.auth = new JWTMiddleware()
    this.initializeMiddlewares()
    this.initializeRoutes()
  }

  private initializeMiddlewares() {
    this.router.use(this.auth.validateJWT)
  }

  private initializeRoutes() {
    this.router.get('/', this.controller.getAll.bind(this.controller))
    this.router.get('/:id', this.controller.getById.bind(this.controller))
    this.router.post('/', this.controller.create.bind(this.controller))
    this.router.put('/:id', this.controller.update.bind(this.controller))
    this.router.delete('/:id', this.controller.delete.bind(this.controller))
  }
}
