import { Module } from '@nestjs/common';
import { JobPostModule } from 'src/post/job-post.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [PrismaModule, JobPostModule],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
