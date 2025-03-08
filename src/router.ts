import { Router } from "express";

const router =  Router()

// ROUTING 
router.get('/', (req, res) => {
	res.send('Hola papu')
})

router.get('/nosotros', (req, res) => {
	res.send('Nosotros')
})

router.get('/blog', (req, res) => {
	res.send('Hola papu')
})

export default router
