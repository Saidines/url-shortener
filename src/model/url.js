import mongoose from 'mongoose';
 const url_schema= new mongoose.Schema({
 slug:{type:String,required:true,unique:true},
 longurl:{type:String,required:true},
 userid:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
 createdAt:{type:Date,default: Date.now}}
 );
  
 const url=mongoose.model('url',url_schema);
 export default url;
