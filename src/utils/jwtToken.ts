import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { User } from '../entities/user';

dotenv.config({path:"src/.env"});

//function to create a jwt token 
export const generateToken = (userData: User)=>{
    
  //creating a payload by changing the class based object into pure js object 
    const payload=JSON.parse(JSON.stringify(userData));

  return jwt.sign(payload,process.env.JWT_SECRET as string,{expiresIn: '1d'});

}