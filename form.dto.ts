import { IsNotEmpty,IsEmail, IsPhoneNumber, IsStrongPassword } from "class-validator";

export class AdminDtoForm
{

    @IsNotEmpty()
    firstname:string;

    @IsNotEmpty()
    lastname:string;

    @IsEmail()
    email:string;

    @IsPhoneNumber("BD")
    phoneNumber: string;

    @IsStrongPassword()
    passward: string;

    @IsNotEmpty()
    address:string;



    fileName:string;

    
}