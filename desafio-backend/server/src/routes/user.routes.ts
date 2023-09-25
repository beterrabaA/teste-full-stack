import { Router } from 'express'
import UserController from '../controllers/user.controller'
import JWTMiddleware from '../middlewares/auth.middleware'
import Credentials from '../middlewares/credentials.middleware'

export default class UserRouter {
  public router: Router
  private controller: UserController
  private auth: JWTMiddleware
  private crendentials: Credentials
  constructor() {
    this.router = Router()
    this.controller = new UserController()
    this.auth = new JWTMiddleware()
    this.crendentials = new Credentials()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(
      '/register',
      this.crendentials.validateCredentials,
      this.controller.register.bind(this.controller),
    )

    this.router.get(
      '/login/userLoggedId',
      this.auth.validateJWT,
      this.controller.login.bind(this.controller),
    )

    this.router.post(
      '/login',
      this.crendentials.validateCredentials,
      this.controller.login.bind(this.controller),
    )
  }
}
