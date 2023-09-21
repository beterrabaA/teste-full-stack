import { Router } from 'express'
import UserController from '../controllers/user.controller'

export default class UserRouter {
  public router: Router
  private controller: UserController
  constructor() {
    this.router = Router()
    this.controller = new UserController()
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.post('/register', this.controller.register)
  }
}
