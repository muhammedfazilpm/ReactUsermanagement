const mongoose=require ('mongoose')
const userScema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}
},{
    timestamps:true
}
)

const userModel=mongoose.model('users',userScema)

module.exports=userModel;