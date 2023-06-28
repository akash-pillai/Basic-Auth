import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

 
@Entity({name:"user"})
@Unique(['email'])
 export class User{

    @PrimaryGeneratedColumn()
    id :number

    @Column({name:"fullname"})
    fullName :string

    @Column({name:"password"})
    password : string

    @Column({name:"email"})
    email : string 

    @Column({name:"phone_number"})
    phoneNumber :string;



 }