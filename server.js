const express=require('express')
const cors = require("cors")
const app=express()
require('dotenv').config();
const dbConfig=require("./config/dbConfig")
app.use(express.json())
app.use(cors())
const userRoute=require ("./routes/userRoutes")
app.use('/api/user',userRoute)
const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`listening on port ${port}`))
