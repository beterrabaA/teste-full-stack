import 'dotenv/config'
import App from './app'

const PORT = process.env.API_PORT || 3333

const app = new App()

app.listen(PORT)
