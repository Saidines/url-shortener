import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {user} from './model/user.js';
import register from './routes/public_routes/register.js';
import login from './routes/public_routes/login.js';
import test from './routes/protected_routes/test.js';
import create_slug from './routes/protected_routes/create_slug.js';
import redirect from './routes/public_routes/redirect.js';
const app=express();
dotenv.config();
app.use(express.json());
app.use('/register',register);
app.use('/login',login);	
app.use('/test',test);	
app.use('/url',create_slug);
app.use('/',redirect);
//console.log("process.env.MONGO_URL");

mongoose.connect(process.env.MONGO_URL,{
	useNewUrlParser:true,
	useUnifiedTopology:true
	})
	.then(()=>console.log("connected to mongo")).
	catch((err)=>console.error("connection failed",err));
	
	
app.listen(8080,()=>{
	console.log("listening on port 8080");
	});
	
