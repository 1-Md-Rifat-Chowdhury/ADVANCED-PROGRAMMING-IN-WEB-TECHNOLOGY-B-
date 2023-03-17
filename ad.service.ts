import { Injectable } from "@nestjs/common";
import { AdminDtoForm } from "../dto/form/admin/form.dto";
import { AdminEntity } from "../entity/admin/entity";
import { InjectRepository} from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { MailerService } from "@nestjs-modules/mailer";
// import {AdminDtoFormUpdate} from "../dto/form/admin/update.dto";
import * as bcrypt from 'bcrypt';
import { TestDtoForm } from "../dto/form/test/Tform.dto";
import { TestEntity } from "../entity/admin/test.entity";
import { CabinDtoForm } from "../dto/form/cabin/Caform.dto";
import { CabinEntity } from "../entity/admin/cabin.entity";
import { OperationDtoForm } from "../dto/form/operation/operation.dto";
import { OperatiionEntity } from "../entity/admin/operation.entity";
import { MedicineEntity } from "../entity/admin/medicine.entity";
import { MedicineDtoForm } from "../dto/form/medicine/medicine.dto";
import { AmbulenceDtoForm } from "../dto/form/ambulence/ambulence.dto";
import { AmbulenceEntity } from "../entity/admin/ambulence.entity";
import { EmergencyEntity } from "../entity/admin/emergency.entity";
import { EmergencyDtoForm } from "../dto/form/emergency/emergency.dto";
import { SalaryEntity } from "../entity/admin/salary.entity";


@Injectable()
export class AdminService
{

    constructor(
        @InjectRepository(AdminEntity)
        private adminRepository: Repository<AdminEntity>




    ){}   
    AddAdminAccount(adminDtoFom:AdminDtoForm):any
    {
        const adminAccount = new AdminEntity()
        adminAccount.firstname= adminDtoFom.firstname;
        adminAccount.lastname= adminDtoFom.lastname;
        adminAccount.email=adminDtoFom.email;
        adminAccount.passward=adminDtoFom.passward;
        adminAccount.phoneNumber=adminDtoFom.phoneNumber;
        adminAccount.address=adminDtoFom.address;

        return this.adminRepository.save(adminAccount)
    }

    PatientHistoryById(quer):any
    {
        return this.adminRepository.findOneBy({id:quer.id,firstname:quer.firstName,lastname:quer.lastName})
    }
    
    TotalIncomeById(id):any
    {
        return this.adminRepository.findOneBy({id})
    }
    

}






                @Injectable()
                export class TestService{
                    constructor(
                        @InjectRepository(TestEntity)
                        private testRepository: Repository<TestEntity>,

                    ){}

                                    DeleteTest(id):any
                    {
                        return this.testRepository.delete(id);
                    }


                    TestUpdate(testName,testReasson):any
                    {
                        return this.testRepository.update({testReasson:testReasson},{testName:testName});
                
                    }

                    AddTest(testDtoFom:TestDtoForm):any
                    {
                        const testAccount = new TestEntity()
                        testAccount.testName = testDtoFom.testName;
                        testAccount.testReasson=testDtoFom.testReasson;
                
                        
                
                        return this.testRepository.save(testAccount);
                    }



                    }
                @Injectable()
                export class CabinService{

                    
                        constructor(
                            @InjectRepository(CabinEntity)
                            private cabinRepository: Repository<CabinEntity>,
                    
                        ){}

                        AddCabin(cabinDtofom:CabinDtoForm):any
    {

        const cabinAccount =new CabinEntity()
        cabinAccount.cabinNumber=cabinDtofom.cabinNumber;

        return this.cabinRepository.save(cabinAccount);
    }


                        
                    
                        }


                @Injectable()
                export class OperationService{
                    constructor(
                        @InjectRepository(OperatiionEntity)
                        private operationRepository: Repository<OperatiionEntity>,

                    ){}

                    AddOperationTheater(operationDtoFom:OperationDtoForm):any
                    {
                
                        const operationAccount= new OperatiionEntity()
                        operationAccount.OpRoomNumber =operationDtoFom.OpRoomNumber;
                        return this.operationRepository.save(operationAccount);
                    }

                    }

                @Injectable()
                export class MedicineService{
                    constructor(
                        @InjectRepository(MedicineEntity)
                        private medicineRepository: Repository<MedicineEntity>,
                
                    ){}


                    AddMedicine(medicineDtofom:MedicineDtoForm):any
                    {
                        const medicineAccount =new MedicineEntity()
                        medicineAccount.MedicineName =medicineDtofom.MedicineName; 
                        medicineAccount.MedicineGroup=medicineDtofom.MedicineGroup;
                        medicineAccount.MedicinePrice=medicineDtofom.MedicinePrice;

                        return this.medicineRepository.save(medicineAccount);
                    }
                    
                

                    
                    }

                @Injectable()
                    export class AmbulenceService{
                        constructor(
                            @InjectRepository(AmbulenceEntity)
                            private ambulenceRepository: Repository<AmbulenceEntity>,
                    
                        ){}

                        
    AddAmbulence(ambulenceDtofom:AmbulenceDtoForm):any
    {
        const ambulenceAccount =new AmbulenceEntity()

        ambulenceAccount.date=ambulenceDtofom.date;
        ambulenceAccount.time=ambulenceDtofom.time;
        ambulenceAccount.contact=ambulenceDtofom.contact;

        return this.ambulenceRepository.save(ambulenceAccount);
    }
    DeleteAmbulance(AmId):any
    {
        return this.ambulenceRepository.delete(AmId)
    }
            
                }

                @Injectable()
                export class EmergencyService{
                    constructor(
                        @InjectRepository(EmergencyEntity)
                        private emergencyRepository: Repository<EmergencyEntity>,
                
                    ){}

                    AddEmergencyUnit(emergencyDtofom:EmergencyDtoForm):any
                    {
                        const emergencyAccount=new EmergencyEntity()
                        emergencyAccount.caseof=emergencyDtofom.caseof;
                        emergencyAccount.date=emergencyDtofom.date;
                
                        return this.emergencyRepository.save(emergencyAccount)
                    }
                
                    }

                @Injectable()
                export class SalaryService
                {

                    constructor(
                        @InjectRepository(SalaryEntity)
                        private salaryRepository: Repository<SalaryEntity>,

                    ){}

                    SalaryUpdate(salary,email):any
                        {
                            return this.salaryRepository.update(salary,email);
                        }}

                     



        
        
    //      DoctorHistoryById(id):any
    // {
    //     return this.adminRepository.find(id)  
    // }
  
   
    // getDoctorByAdminID(id):any{
    //     return this.adminRepository.find({
    //         where:{id:id},
    //         relations:{
    //             doctors:true,
            
    //         }
    //     });

    // }









   

  

    // CabinUpdate():string
    // {
    //     return " patient cabin updated"
    // }

    // MedicineUpdate():string
    // {
    //     return " medicine updated"
    // }
    // OperationTheaterUpdate():string
    // {
    //     return " Oper updated"
    // }
    // EmergencyUnitUpdate():string
    // {
    //     return " Eme updated"
    // }
    // AmbulenceUpdate():string
    // {
    //     return " Ambulence updated"
    // }


    
    // AddDoctorAccount():string
    // {
    //     return " Its doctor account"
    // }



   

    


    




   



  











    // DeleteDoctorAccount():any
    // {
    //     return " Delete Doctor "
    // }
    // DeletePatientAccount():any
    // {
    //     return " Delete Doctor "
    // }
 
    

    // DeleteCabin(CabinId):any
    // {
    //     return this.cabinRepository.delete(CabinId);
    // }
    // DeleteMedicine(medicineId):any
    // {
    //     return this.medicineRepository.delete(medicineId)
    // }
    // DeleteOperatinTheater(OpId):any
    // {
    //     return this.operationRepository.delete(OpId)
    // }
    // DeleteEmergency(Emid):any
    // {
    //     return this.emergencyRepository.delete(Emid)
    // }
    






    // async signup(mydto)
    // {
    //     const salt = await bcrypt.genSalt();
    //     const hassedpassed = await bcrypt.hash(mydto.passward,salt);
    //     mydto.passward =hassedpassed;
    //     return this.adminRepository.save(mydto);

    // }

    // async signin(mydto)
    // {
    //     console.log(mydto.passward);

    //     const mydata =await this.adminRepository.findOneBy({email:mydto.email});
    //     const isMatch= await bcrypt.compare(mydto.passward,mydata.passward);
    //     if(isMatch){
    //         return 1;
    //     }
    //     else{return 0;
    //     }
    // }
    // async sendEmail(mydata)
    // {
    //     return await this.mailerService.sendMail
    //     ({
    //         to:mydata.email,
    //         subject: mydata.subject,
    //         text: mydata.text,
    //     })
    // }



   
