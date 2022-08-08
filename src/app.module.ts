import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullTestModule } from './bull-test/bull-test.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		BullModule.forRootAsync({
			imports: [ ConfigModule ],
			useFactory: (config: ConfigService) => config.get('queue'),
			inject: [ ConfigService ]
		}),
		BullTestModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
