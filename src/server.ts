import express from 'express' // ESM importacion
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

const app = express() // instancia de express 

connectDB()

// leer data
app.use(express.json())

app.use('/api', router)


export default app