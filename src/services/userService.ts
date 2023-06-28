import { User } from "../entities/user";
import { addUser, getUserByEmail, getUserById } from "../repositories/userRepository";
import { generateToken } from "../utils/jwtToken";




export const signUpService=async (user :User)=>{

    const response=await addUser(user);
    return response;

}

export const listUser= async (id :number)=>{
    const response =await getUserById(id);
    return response;
}

export const loginUser = async (email: string, password: string) => {

    const user = await getUserByEmail(email);
    if (user != null) {
        if (user.password == password) {

            let token: string = generateToken(user);
            return token;
        } else {

            return "password doesnt match"
        }
    }else{
        return "user not found ";
    }
}

