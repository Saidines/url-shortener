import express from 'express';
import url from '../../model/url.js';

const router=express.Router();

	 router.get('/favicon.ico', (req, res) => res.status(204).end());

	router.get('/:slug',async (req,res)=>{
	const slug=req.params.slug;
	console.log(slug);
	const lurl=await url.findOne({slug});
	console.log(lurl);
		try{const lurl=await url.findOne({slug});
		if(!lurl) return res.status(400).send("no such short url");
		let longUrl=lurl.longurl;
		 if (!/^https?:\/\//i.test(longUrl)) {
      longUrl = "http://" + longUrl; // fallback
    }
   	console.log(longUrl);
		res.redirect(302,longUrl);}
		
		catch(error){
		console.log("fialed redirect");
			res.status(500).send(error);
			
		}});
		
export default router;	
