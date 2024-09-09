import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app config
const app=express();
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectdb();

//api endpoints
app.use("/api/food", foodRouter);
app.use('/images',express.static("uploads"))

app.get("/", (req,res)=>{
    res.send("API WORKING")

})

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://sowmya141303:<db_password>@cluster0.nipwx.mongodb.net/?