import mongoose, { Schema } from "mongoose";

export interface IUser {
	name: string
	email: string
	password: string
}

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

const User = mongoose.model<IUser>('User', userSchema)

export default User