const {Schema,model} = require('mongoose')

const JobsSchema = new Schema({


name  : { type:String, required:true },
location :{type:String},
contract :{type:String},
jobrole :{type:String},



},{versionKey:false})

const Jobs = model("jobs",JobsSchema)
module.exports=Jobs
