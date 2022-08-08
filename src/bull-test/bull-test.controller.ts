import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('bull-test')
export class BullTestController {
	constructor(@InjectQueue('test') private readonly testQueue: Queue) {}

	@Post('test')
	async transcode() {
		console.log(process.env.REDIS_URL, 'here');

		await this.testQueue.add('testing', {
			event: 'audio.mp3'
		});
		return;
	}
}
