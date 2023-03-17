import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AdminModule } from './admin/core_file/ad.module';
import { DoctorModule } from './doctor/core_file/do.module';


@Module({
  imports: [AdminModule,DoctorModule,
    TypeOrmModule.forRoot
    (
      {
        type:'postgres',
        host:'localhost',
        password: 'root',
        port: 5432,
        username: 'postgres',
        database: 'Virtual_Medical_Assistant',
        autoLoadEntities:true,
        synchronize:true,

      }
    ),],
  controllers: [],
  providers: [],
})
export class AppModule {}
