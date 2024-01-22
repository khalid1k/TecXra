const mongoose=require('mongoose');
const TestSchema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    
})
module.exports=mongoose.model('test',TestSchema);