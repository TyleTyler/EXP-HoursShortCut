require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express")
const taskRoutes = require("./routes/taskRoutes")
const app = express()
const dbUri = process.env.DBURI

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.set('strictQuery', false)


//Connecting to the database and starting server
setUpconnection = async ()=>{
    await mongoose.connect(dbUri)
    await app.listen(process.env.PORT)
    console.log("Listening")
}

setUpconnection()

app.get('/', (req,res)=>{ res.send("Hello")})
app.use("/api/taskRoute", taskRoutes)


app.use((req, res) =>{
    res.send("This is not a page")
})




