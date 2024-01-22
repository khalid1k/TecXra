const express=require('express');
require('./db/config');
const app=express();
const Test=require('./db/TestSchema');
const cors=require('cors');
app.use(express.json());
app.use(cors());

//this api is used to post data to the database
app.post('/',async (req, res)=>{
    let data=new Test(req.body);
    let result=await data.save();
    res.send(result);
});

//this api get the data from the database
app.get('/',async(req,res)=>{
    let result= await Test.find({});
    if(result){
        res.send(result);
    }else{
        res.send({result:"result is not found"});
    }
});

app.listen(9797);