const { log } = require('console')
const express = require('express') // importamos express

const appp = express() // instancia de express 

// ROUTING 
appp.get('/', (req, res) => {
	res.send('Hola papu')
})

appp.listen(4000, () => {
	console.log('Servidor funcionando');
})

