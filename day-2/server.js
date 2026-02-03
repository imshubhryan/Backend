const express =  require('express')
const app = express()  // server instance create krna

app.get('/',(req, res)=>{
    res.send("Hello World")
})

app.get('/about', (req,res)=>{
    res.send("about page")
})

app.get('/home', (req,res)=>{
    res.send("hompage")
})

app.listen(3000)  // server start karna

