import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	// definir lo que lleva 
	name:{
		type: String,
		require: true, // no puede ir vacio
		trim: true, // espacios inicio final fuera
	},
	email:{
		type: String,
		require: true,
		trim: true,
		unique: true //unico 
	},
	password:{
		type: String,
		require: true,
		trim: true, 
	},
})

const User = mongoose.model('User', userSchema)

export default User