import mongoose from "mongoose"

const userschema = new mongoose.Schema({
	username:{ type:String,required:true,unique:true},
	password:{ type: String, required: true},});
	export const user= mongoose.model('user',userschema);

