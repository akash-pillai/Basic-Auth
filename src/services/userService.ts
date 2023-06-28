import { User } from "../entities/user";
import { addUser, getUserByEmail, getUserById } from "../repositories/userRepository";
import { generateToken } from "../utils/jwtToken";
import bcrypt, { hash } from "bcrypt"




export const signUpService = async (user: User) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const response = await addUser(user);
        return response;
    }
    catch (err) {
        console.log("something error happened");
    }

}

export const listUser = async (id: number) => {
    const response = await getUserById(id);
    return response;
}

export const loginUser = async (email: string, password: string) => {

    const user = await getUserByEmail(email);
    if (user != null) {
        const isMatch=await bcrypt.compare(password,user.password);
        if (isMatch) {
            let token: string = generateToken(user);
            return token;
        } else {
            return "password doesnt match"
        }
    } else {
        return "user not found ";
    }
}

