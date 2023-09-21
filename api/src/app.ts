import express, { Application } from 'express'

export default class App {
  public app: Application
  constructor() {
    this.app = express()
  }

  listen(port: number | string) {
    this.app.listen(port, () => console.log(`server is running on ${port}`))
  }
}
