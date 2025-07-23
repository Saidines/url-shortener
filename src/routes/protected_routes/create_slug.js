import express from 'express';
import url from '../../model/url.js';
import authenticate from '../../utils/authenticate.js';
const router=express.Router();

router.post('/',authenticate,async(req,res)=>{
	console.log(req.body);
	const {longurl,slug}=req.body;
		try{
		await url.create({
			longurl:longurl,slug:slug
		});
		res.status(200).send("slugadded");}
	catch(error){
		if(error.code==11000) res.status(200).send("slug is already used");
		else res.status(500).send("server error");
		}		
});

export default router;
