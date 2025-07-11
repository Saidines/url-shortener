import express from 'express';
import bcrypt from 'bcryptjs'
import {user} from '../../model/user.js';
const router=express.Router();

	router.post('/',async (req,res)=>{
	try{
	
		console.log(req.body);
		const {username,password}=req.body;
		  if (!username || !password) {
      return res.status(400).send("Username and password are required");
    }
		const existing=await user.findOne({username});
		if(existing) return res.status(409).send("username already taken");
		else	{
			const hashed=await bcrypt.hash(password,11);
			const newuser = await user.create({
			username:username,
			password: hashed
			});
			console.log("user Created:",newuser);
			return res.status(200).send("user registered successfully");
		}
		}
		catch(error){ console.error(error);
			return res.status(500).send("server error");
		}
	});

export default router;
