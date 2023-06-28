import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";


dotenv.config({path:"src/.env"});

//midleware to log the incomming http request 
export const loggingMiddleware= (req :Request, res :Response, next :NextFunction)=>{

    console.log(req.method+" "+req.hostname+":"+ process.env.PORT+req.url);
    next();
}