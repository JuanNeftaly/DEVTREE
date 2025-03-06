import express from 'express' // ESM importacion

const app = express() // instancia de express 

// ROUTING 
app.get('/', (req, res) => {
	res.send('Hola papu')
})

export default app