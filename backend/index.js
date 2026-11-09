import express from 'express'
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import chatbotRoutes from './routes/chatbot.route.js';
import cors from 'cors';   // frontend aur backend ko allow krta hai ki frontend backend se data le
const app= express()
dotenv.config()

const port = process.env.PORT ||3000;


app.use(express.json());
app.use(cors())
// Database connection code
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("Connected to mongodb")
}).catch((error) =>{
    console.log("error to connecting")
})
// defining routes
 app.use("/bot/v1/",chatbotRoutes)
app.listen(port,() => {
    console.log(`Server is rumming on port ${port}`)

})