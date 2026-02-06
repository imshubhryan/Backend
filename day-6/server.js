const app = require('./src/app')


const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect("mongodb+srv://iffcogurgaon_db_user:LcrATWWxcn3xycuV@cluster0.xceco0g.mongodb.net/day-6")
    .then(()=>{
        console.log("connected to database");
        
    })
}
connectToDb()


app.listen(3000,()=>{
    console.log("server is running on 3000");
    
})