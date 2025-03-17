//funciones q se mandan a llamar
import type {Request, Response} from 'express'
import User from "../models/User";

 export const createAccount = async (req : Request, res : Response) =>{
	console.log('User register');
	
	const user = new User(req.body)
	await user.save()

	//terminar
	res.send('User register')
}