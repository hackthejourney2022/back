import { AmadeusClient } from 'src/core/domain/client';
import { BaseSampleService } from 'src/core/domain/service/base-sample-service';
import { Test } from '@nestjs/testing';
import { LocationRequest } from 'src/core/domain/model';

const proto = BaseSampleService.prototype;

describe(BaseSampleService.name, () => {
  let target: BaseSampleService;
  let client: AmadeusClient;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        BaseSampleService,
        {
          provide: AmadeusClient,
          useValue: (client = {} as any),
        },
      ],
    }).compile();

    target = moduleRef.get(BaseSampleService);
  });

  describe(proto.getLocation.name, () => {
    beforeEach(() => {
      client.getNearestAirports = jest.fn().mockReturnValue('expected value');
    });

    it('should create user', () => {
      const sample = 'sample value' as unknown as LocationRequest;

      const result = target.getLocation(sample);

      expect(client.getNearestAirports).toHaveCallsLike(['sample value']);
      expect(result).toBe('expected value');
    });
  });
});
