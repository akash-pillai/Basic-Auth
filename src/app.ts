import express from "express";
import dotenv from "dotenv";
import { datasource } from "./config/db";
import { rootRouter } from "./routes/rootRouter";
import { loggingMiddleware } from "./middlewares/logMiddleware";


const app= express();
dotenv.config({path:"src/.env"});

//for using req.body 
app.use(express.json());

//using logging Middleware as a global middleware 
app.use(loggingMiddleware)

app.use(rootRouter)


//connecting to database
datasource.initialize().then(()=>{
    console.log("database sucessfully connected");
    app.listen(process.env.PORT,()=>{
        console.log(`the server is running on port  ${process.env.PORT}` );
    })
}).catch((err)=>{
    console.log(`Error Occured Database couldnt be connected !! `);
    console.log(err);
})


