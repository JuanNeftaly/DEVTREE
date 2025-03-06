import express from 'express' // ESM importacion

const appp = express() // instancia de express 

// ROUTING 
appp.get('/', (req, res) => {
	res.send('Hola papu')
})

const port = process.env.PORT || 4000

appp.listen(port, () => {
	console.log('Servidor funcionando en el puerto:', port);
})

