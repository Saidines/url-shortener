import express from 'express';
import authenticate from '../../authenticate.js';
const router=express.Router();

router.get('/',authenticate,(req,res)=>{
	console.log('jwt successfull');
	res.send('jwt successfull');
	});
	
export default router;
	
