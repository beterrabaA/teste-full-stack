import express, { Application } from 'express'

export default class App {
  public app: Application
  constructor() {
    this.app = express()
    this.middlewaresInitialize()
  }

  private middlewaresInitialize() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  listen(port: number | string) {
    this.app.listen(port, () => console.log(`server is running on ${port}`))
  }
}
