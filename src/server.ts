import express from 'express' // ESM importacion
import router from './router'

const app = express() // instancia de express 

// leer data
app.use(express.json())

app.use('/api', router)


export default app