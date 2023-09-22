import { Router } from 'express'
import UserController from '../controllers/user.controller'
import JWTMiddleware from '../middlewares/auth'

export default class UserRouter {
  public router: Router
  private controller: UserController
  private auth: JWTMiddleware
  constructor() {
    this.router = Router()
    this.controller = new UserController()
    this.auth = new JWTMiddleware()
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.post(
      '/register',
      this.controller.register.bind(this.controller),
    )

    this.router.get(
      '/login/userLoggedId',
      this.auth.validateJWT,
      this.controller.login.bind(this.controller),
    )

    this.router.post('/login', this.controller.login.bind(this.controller))
  }
}
