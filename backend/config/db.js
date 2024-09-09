import mongoose from "mongoose"

export const connectdb = async ()=>{
    await mongoose.connect('mongodb+srv://sowmya141303:sowm_1234_G@cluster0.nipwx.mongodb.net/foodgate').then(()=>console.log("db connected"));
}