import { Module } from '@nestjs/common';
import { BullTestService } from './bull-test.service';
import { BullTestController } from './bull-test.controller';
import { BullModule } from '@nestjs/bull';
import { TestProcessor } from './bull-test.consumer';

@Module({
	imports: [
		BullModule.registerQueue({
			name: 'test'
		})
	],
	providers: [ BullTestService, TestProcessor ],
	controllers: [ BullTestController ]
})
export class BullTestModule {}
