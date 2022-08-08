import { Test, TestingModule } from '@nestjs/testing';
import { BullTestController } from './bull-test.controller';

describe('BullTestController', () => {
  let controller: BullTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BullTestController],
    }).compile();

    controller = module.get<BullTestController>(BullTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
