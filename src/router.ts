import { Router } from "express";
import { createAccount } from "./handlers";

const router =  Router()

// ROUTING 
router.get('/',(req, res) =>{
	console.log('Welcome');
})

router.post('/auth/register', createAccount)

export default router
