import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {user} from '../../model/user.js';
import dotenv from 'dotenv';
	dotenv.config();
 	const router= express.Router();
 	
 	router.post('/',async(req,res)=>{
 	try{
 		const {username,password}=req.body;
 		const existing= await user.findOne({username});
 		if(!existing) return res.status(209).send("invalid credentials");
 		const lock=await bcrypt.compare(password,existing.password);
 		if(lock){
 			const token=jwt.sign({username},process.env.JWT_KEY,{expiresIn:'1h'});
 		return res.status(200).json(token);
 		}
 		else return res.status(200).send("invalid credentials");
 		}
 		catch(error){
 		console.log(error);
 		return res.status(500).send(error);
 		}
 	});
 export default router;
