import express from 'express';
import bcrypt from 'bcryptjs';
import {user} from '../../model/user.js';
 	const router= express();
 	
 	router.post('/',async(req,res)=>{
 	try{
 		const {username,password}=req.body;
 		const existing= await user.findOne({username});
 		if(!existing) return res.status(209).send("invalid credentials");
 		const lock=await bcrypt.compare(password,existing.password);
 		if(lock){
 		
 		return res.status(200).send("correct password");
 		}
 		else return res.status(200).send("invalid credentials");
 		}
 		catch(error){
 		console.log(error);
 		return res.status(500).send(error);
 		}
 	});
 export default router;
