const express = require("express")

const app = express()

app.use(express.json())


const notes = []

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"Note Successfully Created"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes: notes
    })
})

app.delete('/notes/:id',(req,res)=>{
    delete notes[req.params.id]
    res.status(204).json({
        message: "note deleted successfully"
    })
})


app.patch('/notes/:id',(req,res)=>{
    notes[req.params.id].description = req.body.description
    res.status(200).json({
        message: "Note Updated successfully"
    })
})

module.exports =  app



// iffcogurgaon_db_user
// 0VLTL8WfGI7q7Jyp