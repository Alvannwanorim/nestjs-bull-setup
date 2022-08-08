import { Test, TestingModule } from '@nestjs/testing';
import { BullTestService } from './bull-test.service';

describe('BullTestService', () => {
  let service: BullTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BullTestService],
    }).compile();

    service = module.get<BullTestService>(BullTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
