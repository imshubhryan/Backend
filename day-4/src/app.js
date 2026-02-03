

// -server create krna
// - server config karna


const express = require('express')

const app = express() // sever create yha ho rha hai

app.use(express.json())



const notes = [
    // {
    //     title: "title 1",
    //     description: "description 1"
    // }
]


app.get('/', (req,res)=>{
    res.send("hello world")
})

app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    
    res.send("notes created")
})

app.get('/notes', (req,res)=>{
    res.send(notes)
})


// delete notes

app.delete('/notes/:id', (req,res)=>{
    delete notes[req.params.id]
    res.send("note deleted successfully")
    
})


app.patch('/notes/:id', (req, res)=>{
    notes[req.params.id].description = req.body.description
    res.send("Note updated successfully")
})

module.exports = app

