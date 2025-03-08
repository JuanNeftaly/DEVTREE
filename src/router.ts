import { Router } from "express";

const router =  Router()

// ROUTING 

router.post('/auth/register', (req, res) =>{
	console.log('Register');
})

export default router
