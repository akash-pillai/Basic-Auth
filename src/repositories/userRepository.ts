import { datasource } from "../config/db";
import { User } from "../entities/user";



const userRepository=datasource.getRepository(User);

export const addUser=(user :User)=>{

    return  userRepository.save(user);
}

export const getUserById= (id :number)=>{
    const qwery= "SELECT * FROM public.user  WHERE id= $1";
    return userRepository.query(qwery,[id]);
}

export const getUserByEmail= (email :string)=>{

    
    return userRepository.findOne({ where: { email } });

}


