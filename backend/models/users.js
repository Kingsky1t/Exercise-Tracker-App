const mongoose = require('mongoose')

const schema = mongoose.Schema({
     username:{
          type:String,
          required:true,
          unique:true,
     }
})

const users=mongoose.model('users',schema)
module.exports= users