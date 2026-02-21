// app.js ka main kaam hota hai server ko create krna

const express = require('express')
const noteModel = require('./models/note.model')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./public'))


/* POST /notes
create new note and save data in mongodb
req.body = {title,description} */

app.post('/notes',async(req,res)=>{
    const {title,description} = req.body;
    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: "Note Created SuccessFully",
        note
    })

})


/* -GET /notes 
   - fetch all the notes data from mongodb and send them in response*/

app.get('/notes',async(req,res)=>{
   const notes = await noteModel.find()

   res.status(200).json({
    message: "Notes Fetch Successfully",
    notes
   })
})


/* Delete /notes/:id
-Delete Note with the id from request.params
*/

app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully"
    })  
})


/* -Patch /notes/:id
  - update the description of note by id
  -req.body = {description}
  */

  app.patch('/notes/:id',async(req,res)=>{
    const id = req.params.id
    const {title,description} =  req.body

   await noteModel.findByIdAndUpdate(id, {title,description})

   res.status(200).json({
    message:"Note Updated Successfully"
   })
  })


  app.use('*name', (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"));
  })

module.exports = app