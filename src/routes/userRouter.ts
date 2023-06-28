import { Router } from "express";
import {Request,Response} from "express"
import { listUser, loginUser, signUpService } from "../services/userService";
import { loggingMiddleware } from "../middlewares/logMiddleware";
import { checkJwtToken } from "../middlewares/authenticationMiddleware";
import { JwtPayload } from "jsonwebtoken";


export const userRouter=Router();


//create a new User
userRouter.post("/signUp",async (req :Request,res:Response)=>{

    const response =await signUpService(req.body);
    res.send(response);
})

//get details of the logged in user
userRouter.get("/detail",checkJwtToken,async (req:Request,res:Response)=>{

    let user = (req as any).decodedUser;
    const response = await listUser(user.id);
    res.send(response);
})


//login using email and password
userRouter.post("/login",async (req :Request, res :Response)=>{

    const {email,password}= req.body;
    const response= await loginUser(email,password);
    res.json({token:response});
})
