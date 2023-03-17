import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorService } from "src/doctor/core_file/do.service";
import { DoctorEntity } from "src/doctor/entity/doctor/Dentity";
import { AmbulenceEntity } from "../entity/admin/ambulence.entity";
import { CabinEntity } from "../entity/admin/cabin.entity";
import { EmergencyEntity } from "../entity/admin/emergency.entity";
import { AdminEntity } from "../entity/admin/entity";
import { SalaryEntity } from "../entity/admin/salary.entity";
import { TestEntity } from "../entity/admin/test.entity";
import { AdminController } from "./ad.controller";
import { AdminService, AmbulenceService, CabinService, EmergencyService, MedicineService, OperationService, SalaryService, TestService } from "./ad.service";
import { MedicineEntity } from "../entity/admin/medicine.entity";
import { OperatiionEntity } from "../entity/admin/operation.entity";


@Module(

    {
        imports:[
            // MailerModule.forRoot({
            //     transport:{
            //         host:'smtp.gmail.com',
            //         port:465,
            //         ignoreTLS:true,
            //         secure: true,
            //         auth:{
            //             user:'your email address',
            //             pass:'your app Passward'
            //             },
            //              }
            //                      }
            // ),
            
            TypeOrmModule.forFeature([AdminEntity, DoctorEntity,TestEntity,AmbulenceEntity,CabinEntity,EmergencyEntity,OperatiionEntity,MedicineEntity,SalaryEntity,TestEntity])],
        controllers:[AdminController],
        providers:[AdminService,DoctorService,TestService,CabinService,OperationService,MedicineService,AmbulenceService,EmergencyService,SalaryService],
    }
       )
export class AdminModule
{

}