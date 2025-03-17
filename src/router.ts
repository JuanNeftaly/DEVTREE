import { Router } from "express";
import User from "./models/User";

const router =  Router()

// ROUTING 
router.get('/',(req, res) =>{
	console.log('Welcome');
})

router.post('/auth/register', async (req, res) =>{
	console.log('User register');
	
	const user = new User(req.body)
	await user.save()
})

export default router
