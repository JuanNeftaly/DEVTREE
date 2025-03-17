import colors from 'colors' // dependencia
import server from './server' 

const port = process.env.PORT || 4000

server.listen(port, () => {
	console.log(colors.blue.bold('Servidor funcionando en el puerto:'), port);
})

// creacion de types 
type Product = {
	id: number
	price: number
	name: string
}

// asignar types 
let product : Product = {
	id: 1,
	price: 45,
	name: 'Cebollas'
}

// creacion Interfaces
interface Client {
	id: number
	name: string
}
