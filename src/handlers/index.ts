//funciones q se mandan a llamar

import User from "../models/User";

 export const createAccount = async (req, res) =>{
	console.log('User register');
	
	const user = new User(req.body)
	await user.save()

	//terminar
	res.send('User register')
}