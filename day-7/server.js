const app = require('./src/app')

const connectToDb =  require('./src/config/databsae')

connectToDb()

app.listen('3000',()=>{
    console.log("server is running on port 3000");
    
})