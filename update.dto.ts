import { IsNotEmpty,Length,IsEmail} from "class-validator";

export class AdminDtoFormUpdate
{
    
    @IsNotEmpty()
    @Length(1,20)
    firstName:string;

    @IsNotEmpty()
    @Length(1,20)
    lastName:string;

    @IsEmail()
    email:string;

    


    
}