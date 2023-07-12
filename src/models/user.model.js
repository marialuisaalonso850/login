import mongoose from 'mongoose'

'fazt'
mongoose.Schema({
  username:{
      type:String,
      required:true,
      trim:true,
  },
  Email:{
      type:String,
      required:true,
  },
 password:{
   type:String,
   required:true,
 }
})
export default mongoose.model ('User',userSchema)

