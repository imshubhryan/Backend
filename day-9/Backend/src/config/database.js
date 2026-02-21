const mongoose = require('mongoose')

const connetToDb = async()=>{
   await mongoose.connect(process.env.MONGO_URI)
   console.log("connected to db");  
}

module.exports = connetToDb