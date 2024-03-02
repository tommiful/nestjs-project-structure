import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import * as controllers from './controllers';

@Module({
  // Authentication
  imports: [TerminusModule, HttpModule], 
  controllers: Object.values(controllers),
})
export class BaseModule {}
