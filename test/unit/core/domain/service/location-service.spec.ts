import { GeocoderClient } from 'src/core/domain/client/geocoder-client';
import { AmadeusClient } from 'src/core/domain/client';
import { LocationService } from 'src/core/domain/service';
import { Test } from '@nestjs/testing';
import { Coordinates } from 'src/core/domain/model';

const proto = LocationService.prototype;

describe(LocationService.name, () => {
  let target: LocationService;
  let amadeus: AmadeusClient;
  let geocoder: GeocoderClient;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        LocationService,
        {
          provide: AmadeusClient,
          useValue: (amadeus = {} as any),
        },
        {
          provide: GeocoderClient,
          useValue: (geocoder = {} as any),
        },
      ],
    }).compile();

    target = moduleRef.get(LocationService);
  });

  describe(proto.getLocation.name, () => {
    beforeEach(() => {
      amadeus.getNearestAirports = jest.fn().mockReturnValue('expected value');
    });

    it('should create user', () => {
      const sample = 'sample value' as unknown as Coordinates;

      const result = target.getLocation(sample);

      expect(amadeus.getNearestAirports).toHaveCallsLike(['sample value']);
      expect(result).toBe('expected value');
    });
  });

  describe(proto.getLocationByText.name, () => {
    beforeEach(() => {
      geocoder.getPlaces = jest
        .fn()
        .mockResolvedValue([{ coordinates: 'abc' }]);
      amadeus.getNearestAirports = jest
        .fn()
        .mockResolvedValue(['expected value']);
    });

    it('should create user', async () => {
      const search = 'sample value';

      const result = await target.getLocationByText(search).toArray();

      expect(geocoder.getPlaces).toHaveCallsLike([search]);
      expect(amadeus.getNearestAirports).toHaveCallsLike(['abc', 3]);
      expect(result).toEqual([
        {
          place: { coordinates: 'abc' },
          airports: ['expected value'],
        },
      ]);
    });
  });
});
