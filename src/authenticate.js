import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
 const authenticate = (req,res,next)=>{
 	const authHeader=req.headers.authorization;
 	if(!authHeader||!authHeader.startsWith('Bearer')){
 	res.status(401).send("doesn't have authorization information token");
 	}
 	const token=authHeader.split(' ')[1];
 	try{
 		const decoded=jwt.verify(token,process.env.JWT_KEY);
 		req.user=decoded;
 		next();
 		}
 	catch(error){
 		res.send(error);		
 	}
 }
 
 export default authenticate;
