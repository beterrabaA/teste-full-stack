import express, { Application } from 'express'
import UserRouter from './routes/user.routes'

export default class App {
  public app: Application
  private userRoutes = new UserRouter()
  constructor() {
    this.app = express()
    this.middlewaresInitialize()
    this.initialzeRoutes()
  }

  private initialzeRoutes() {
    this.app.use('/events', this.userRoutes.router)
  }

  private middlewaresInitialize() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  listen(port: number | string) {
    this.app.listen(port, () => console.log(`server is running on ${port}`))
  }
}
