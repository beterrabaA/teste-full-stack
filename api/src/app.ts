import express, { Application } from 'express'

export default class App {
  public app: Application
  constructor() {
    this.app = express()
  }

  listen() {
    this.app.listen(3333, () => console.log('server is running'))
  }
}
