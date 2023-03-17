import { Controller, Get, Post, Put,Delete, ValidationPipe,Body, ParseIntPipe,UsePipes,Param,UseGuards,Query, Session, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, UnauthorizedException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import session from "express-session";
import { diskStorage } from "multer";
import { DoctorService } from "src/doctor/core_file/do.service";

import { DoctorDtoForm } from "src/doctor/dto/form/doctor/form.dto";
import { AdminDtoForm } from "../dto/form/admin/form.dto";
import { AmbulenceDtoForm } from "../dto/form/ambulence/ambulence.dto";
import { CabinDtoForm } from "../dto/form/cabin/Caform.dto";
import { EmergencyDtoForm } from "../dto/form/emergency/emergency.dto";
import { MedicineDtoForm } from "../dto/form/medicine/medicine.dto";
import { OperationDtoForm } from "../dto/form/operation/operation.dto";
import { TestDtoForm } from "../dto/form/test/Tform.dto";
import { SessionGuard } from "../Sessiongurd/session.guard";

import { AdminService, AmbulenceService, CabinService, EmergencyService, MedicineService, OperationService, SalaryService, TestService } from "./ad.service";





@Controller('admin')

export class AdminController
{
    
    constructor (private  adSer:AdminService, private doctorService: DoctorService, private testSer:TestService, private cabinSer:CabinService, private opSer:OperationService, private mediSer:MedicineService, private ambuSer:AmbulenceService, private EmeSer:EmergencyService, private SalSer:SalaryService){}


    // @Get('/doctor-history')
    // DoctorHistoryById(@Param('id',ParseIntPipe)id:number):any
    // {
    //     return this.adSer.DoctorHistoryById(id);
    // }

    @Get('/patient-history')
    PatientHistoryById(@Query()quer:any):any
    {
        return this.adSer.PatientHistoryById(quer);
    }

    @Get('Income/:id')
    TotalIncomeById(@Param('id',ParseIntPipe)id:number):any
    {
        return this.adSer.TotalIncomeById(id);
    }

    // @Get('find-Doctor-by-admin-/:id')

    // getDoctorByAdminID(@Param('id',ParseIntPipe)id:number):any{
    //     return this.doctorService.getDoctorByAdminID(id);
    // }
    








    // @Put('update-test')
    // // @UseGuards(SessionGuard)
    // @UsePipes(new ValidationPipe())
    // TestUpdate(@Session() session,@Body('testName') testName:string):any
    // {
    //     console.log(session.testReasson);
    //     return this.adSer.TestUpdate(testName,session.testReasson);
    // }

    // @Put('update-salary')
    // // @UseGuards(SessionGuard)
    // @UsePipes(new ValidationPipe())
    // SalaryUpdate(@Session() session,@Body('salary')salary:number):any
    // {
    //     return this.adSer.SalaryUpdate(salary, session.email);
    // }

    // @Put('update-cabin')
    // CabinUpdate():string
    // {
    //     return this.cabinSer.();
    // }

    // @Put('update-medicine')
    // MedicineUpdate():string
    // {
    //     return this.adSer.MedicineUpdate();
    // }
    // @Put('update-operation-theater')
    // OperationTheaterUpdate():string
    // {
    //     return this.adSer.OperationTheaterUpdate();
    // }

    // @Put('update-emergency-unit')
    // EmergencyUnitUpdate():string
    // {
    //     return this.adSer.EmergencyUnitUpdate();
    // }

    // @Put('update-ambulence')
    // AmbulenceUpdate():string
    // {
    //     return this.adSer.AmbulenceUpdate();
    // }






    @Post('/add-admin-account')
   // @UsePipes(new ValidationPipe())

    AddAdminAccount(@Body() adminDtoFom:AdminDtoForm)

    {
        return this.adSer.AddAdminAccount(adminDtoFom)
    }
    
    @Post('/add-Doctor-account')
    // @UsePipes(new ValidationPipe())

    AddDoctorAccount(@Body()doctorDto:DoctorDtoForm):any
    {
        return this.doctorService.AddDoctorAccount(doctorDto);

    }

    @Post('Add-test')
    // @UsePipes(new ValidationPipe())

    AddTest(@Body() testDtoFom:TestDtoForm):any    {
        return this.testSer.AddTest(testDtoFom);
    }


    @Post('Add-cabin')
    // @UsePipes(new ValidationPipe())
    AddCabin(@Body()cabinDtofom:CabinDtoForm):any
    {
        return this.cabinSer.AddCabin(cabinDtofom);
    }


    @Post('Add-medicine')
    // @UsePipes(new ValidationPipe())
    AddMedicine(@Body()medicineDtofom:MedicineDtoForm):any
    {
        return this.mediSer.AddMedicine(medicineDtofom);
    }


    @Post('Add-operation-theater')
    // @UsePipes(new ValidationPipe())
    AddOperationTheater(@Body()operationDtoFom:OperationDtoForm):any
    {
        return this.opSer.AddOperationTheater(operationDtoFom);
    }


    @Post('Add-emergency')
    // @UsePipes(new ValidationPipe())

    AddEmergencyUnit(@Body()emergencyDtofom:EmergencyDtoForm):any
    {
        return this.EmeSer.AddEmergencyUnit(emergencyDtofom);
    }

    @Post('Add-Ambulence')
    // @UsePipes(new ValidationPipe())
    AddAmbulence(@Body()ambulenceDtofom:AmbulenceDtoForm):any
    {
        return this.ambuSer.AddAmbulence(ambulenceDtofom);
    }








    // @Delete('delete-doctor-account')
    // DeleteDoctorAccount():any
    // {
    //     return this.adSer.DeleteDoctorAccount();
    // }

    // @Delete('delete-patient-account')
    // DeletePatientAccount():any
    // {
    //     return this.adSer.DeletePatientAccount();
    // }

    // @Delete('delete-test')
    // DeleteTest(@Param('id',ParseIntPipe)id:number):any
    // {
    //     return this.adSer.DeleteTest(id);
    // }

    // @Delete('delete-cabin')
    // DeleteCabin(@Param('CabinId',ParseIntPipe)CabinId:number):any
    // {
    //     return this.adSer.DeleteCabin(CabinId);
    // }

    // @Delete('delete-medicine')
    // DeleteMedicine(@Param('medicineId',ParseIntPipe)medicineId:number):any
    // {
    //     return this.adSer.DeleteMedicine(medicineId);
    // }

    // @Delete('delete-operation-theater')
    // DeleteOperatinTheater(@Param('OpId',ParseIntPipe)OpId:number):any
    // {
    //     return this.adSer.DeleteOperatinTheater(OpId);
    // }
    
    // @Delete('delete-emergency-unit')
    // DeleteEmergency(@Param('Emid',ParseIntPipe)Emid:number):any
    // {
    //     return this.adSer.DeleteEmergency(Emid);
    // }
    
    // @Delete('delete-ambulance')
    // DeleteAmbulance(@Param('AmId',ParseIntPipe)AmId:number):any
    // {
    //     return this.adSer.DeleteAmbulance(AmId);
    // }



    

   


    // @Post('signup')
    // @UseInterceptors(FileInterceptor('yourFile',
    // {
    //     storage:diskStorage({destination:'./uploads',
    // filename:function(req,file,cb){
    //     cb(null,Date.now()+file.originalname)
        
    // }})
    // }))

    // signup(@Body() mydto:AdminDtoForm,@UploadedFile(new ParseFilePipe({validators:[
    //     new MaxFileSizeValidator({maxSize:60000}),
    //     new FileTypeValidator({fileType:'png|jpg|jpeg|'}),

    // ],}),)file:Express.Multer.File){
    //     mydto.fileName = file.filename;

    //     return this.adSer.signup(mydto);
    //     console.log(file)
    // }


    // @Get('/signin')
    // signin(@Session() session, @Body() mydto:AdminDtoForm)
    // {
    //     if(this.adSer.signin(mydto))
    //     {
    //         session.email=mydto.email;
    //         console.log(session.email);
    //         return{message:"Successfully Sign In"};
    //     }
    //     else
    //     {
    //         return {message:"Something is wrong in your email or passward"}
    //     }

    
    // }

    // @Get('signout')
    // signout(@Session() session)
    // {
    //     if(session.destroy())
    //     {
    //         return{message:"you are logged out"};

    //     }
    //     else
    //     {
    //         throw new UnauthorizedException("Invalid operation");

    //     }

    // }

    // @Post('sendemail')
    // sendEmail(@Body()mydata)
    // {
    //     return this.adSer.sendEmail(mydata);
    // }


    




}