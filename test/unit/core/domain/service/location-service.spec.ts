import { GeocoderClient } from 'src/core/domain/client/geocoder-client';
import {
    AirportsClient,
    SafePlaceClient,
    LocationScoreClient,
} from 'src/core/domain/client';
import { LocationService } from 'src/core/domain/service';
import { Test } from '@nestjs/testing';
import { Coordinates } from 'src/core/domain/model';

const proto = LocationService.prototype;

describe(LocationService.name, () => {
    let target: LocationService;
    let airports: AirportsClient;
    let geocoder: GeocoderClient;
    let safePlace: SafePlaceClient;
    let _locationScore: LocationScoreClient;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                LocationService,
                {
                    provide: AirportsClient,
                    useValue: (airports = {} as any),
                },
                {
                    provide: GeocoderClient,
                    useValue: (geocoder = {} as any),
                },
                {
                    provide: SafePlaceClient,
                    useValue: (safePlace = {} as any),
                },
                {
                    provide: LocationScoreClient,
                    useValue: (_locationScore = {} as any),
                },
            ],
        }).compile();

        target = moduleRef.get(LocationService);
    });

    describe(proto.getLocation.name, () => {
        beforeEach(() => {
            airports.getNearestAirports = jest
                .fn()
                .mockReturnValue('expected value');
        });

        it('should create user', () => {
            const sample = 'sample value' as unknown as Coordinates;

            const result = target.getLocation(sample);

            expect(airports.getNearestAirports).toHaveCallsLike([
                'sample value',
            ]);
            expect(result).toBe('expected value');
        });
    });

    describe(proto.getLocationByText.name, () => {
        beforeEach(() => {
            geocoder.getPlaces = jest
                .fn()
                .mockResolvedValue([{ coordinates: 'abc' }]);
            airports.getNearestAirports = jest
                .fn()
                .mockResolvedValue(['expected value']);
        });

        it('should create user', async () => {
            const search = 'sample value';

            const result = await target.getLocationByText(search).toArray();

            expect(geocoder.getPlaces).toHaveCallsLike([search]);
            expect(airports.getNearestAirports).toHaveCallsLike(['abc', 3]);
            expect(result).toEqual([
                {
                    place: { coordinates: 'abc' },
                    airports: ['expected value'],
                },
            ]);
        });
    });

    describe(proto.getLocationByText.name, () => {
        beforeEach(() => {
            geocoder.getPlaces = jest
                .fn()
                .mockResolvedValue([{ coordinates: 'abc' }]);
            airports.getNearestAirports = jest
                .fn()
                .mockResolvedValue(['expected value']);
        });

        it('should create user', async () => {
            const search = 'sample value';

            const result = await target.getLocationByText(search).toArray();

            expect(geocoder.getPlaces).toHaveCallsLike([search]);
            expect(airports.getNearestAirports).toHaveCallsLike(['abc', 3]);
            expect(result).toEqual([
                {
                    place: { coordinates: 'abc' },
                    airports: ['expected value'],
                },
            ]);
        });
    });

    describe(proto.getSafetyRates.name, () => {
        beforeEach(() => {
            safePlace.getSafetyRate = jest
                .fn()
                .mockResolvedValue('safe place result');
        });

        it('should create user', async () => {
            const coordinates = 'coordinates value' as unknown as Coordinates;

            const result = await target.getSafetyRates(coordinates);

            expect(safePlace.getSafetyRate).toHaveCallsLike([coordinates]);
            expect(result).toBe('safe place result');
        });
    });
});
