import { SafetyRateResponse } from 'src/core/domain/model';
import { CategoryRatedArea } from './models';

/**
 * flight-destinatios is failing. This mock is to show the api concept if it keeps failing
 */
export const flightDestinationsFallback = {
    data: [
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'LON',
            departureDate: '2023-03-22',
            returnDate: '2023-03-25',
            price: {
                total: '71.15',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=LON&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=LON&departureDate=2023-03-22&returnDate=2023-03-25&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'NYC',
            departureDate: '2022-12-25',
            returnDate: '2023-01-01',
            price: {
                total: '116.81',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=KRK&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=KRK&departureDate=2022-12-25&returnDate=2023-01-01&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'CDG',
            departureDate: '2023-02-07',
            returnDate: '2023-02-11',
            price: {
                total: '123.78',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=GOA&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=GOA&departureDate=2023-02-07&returnDate=2023-02-11&adults=1&nonStop=false',
            },
        },
    ],
    dictionaries: {
        currencies: {
            EUR: 'EURO',
        },
        locations: {
            CLJ: {
                subType: 'AIRPORT',
                detailedName: 'CLUJ NAPOCA',
            },
            RIX: {
                subType: 'AIRPORT',
                detailedName: 'RIGA INTL',
            },
            KTM: {
                subType: 'AIRPORT',
                detailedName: 'TRIBHUVAN INTL',
            },
            KRK: {
                subType: 'AIRPORT',
                detailedName: 'JOHN PAUL II BALICE',
            },
            HNL: {
                subType: 'AIRPORT',
                detailedName: 'DANIEL K INOUYE INTL',
            },
            FLL: {
                subType: 'AIRPORT',
                detailedName: 'FLL INTL',
            },
            ORL: {
                subType: 'AIRPORT',
                detailedName: 'EXECUTIVE',
            },
            SLC: {
                subType: 'AIRPORT',
                detailedName: 'SALT LAKE CITY INTL',
            },
            WAW: {
                subType: 'AIRPORT',
                detailedName: 'FREDERIC CHOPIN',
            },
            MTY: {
                subType: 'AIRPORT',
                detailedName: 'MARIANO ESCOBEDO INTL',
            },
            TLL: {
                subType: 'AIRPORT',
                detailedName: 'LENNART MERI',
            },
            GOA: {
                subType: 'AIRPORT',
                detailedName: 'CRISTOFORO COLOMBO',
            },
            MUC: {
                subType: 'AIRPORT',
                detailedName: 'MUNICH INTERNATIONAL',
            },
            SSA: {
                subType: 'AIRPORT',
                detailedName: 'D.L.E.MAGALHAES',
            },
            ACC: {
                subType: 'AIRPORT',
                detailedName: 'KOTOKA INTL',
            },
            MDZ: {
                subType: 'AIRPORT',
                detailedName: 'EL PLUMERILLO',
            },
            LWO: {
                subType: 'AIRPORT',
                detailedName: 'INTERNATIONAL',
            },
            MGA: {
                subType: 'AIRPORT',
                detailedName: 'AUGUSTO C.SANDINO INT',
            },
            BOS: {
                subType: 'AIRPORT',
                detailedName: 'EDWARD L LOGAN INTL',
            },
            LON: {
                subType: 'CITY',
                detailedName: 'LONDON',
            },
            TYO: {
                subType: 'CITY',
                detailedName: 'TOKYO',
            },
            DEN: {
                subType: 'AIRPORT',
                detailedName: 'DENVER INTERNATIONAL',
            },
            GOT: {
                subType: 'AIRPORT',
                detailedName: 'LANDVETTER',
            },
            SEA: {
                subType: 'AIRPORT',
                detailedName: 'SEATTLE TACOMA INTL',
            },
            MAD: {
                subType: 'AIRPORT',
                detailedName: 'ADOLFO SUAREZ BARAJAS',
            },
            CCS: {
                subType: 'AIRPORT',
                detailedName: 'SIMON BOLIVAR INTL',
            },
            VIE: {
                subType: 'AIRPORT',
                detailedName: 'VIENNA INTERNATIONAL',
            },
            MOW: {
                subType: 'CITY',
                detailedName: 'MOSCOW',
            },
            RGN: {
                subType: 'AIRPORT',
                detailedName: 'MINGALADON',
            },
            ALC: {
                subType: 'AIRPORT',
                detailedName: 'ALICANTE AIRPORT',
            },
            KIV: {
                subType: 'AIRPORT',
                detailedName: 'INTERNATIONAL',
            },
            VCE: {
                subType: 'AIRPORT',
                detailedName: 'MARCO POLO',
            },
            SIN: {
                subType: 'AIRPORT',
                detailedName: 'CHANGI',
            },
            GLA: {
                subType: 'AIRPORT',
                detailedName: 'GLASGOW INTL',
            },
        },
    },
    meta: {
        currency: 'EUR',
        links: {
            self: 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=MAD&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DESTINATION',
        },
        defaults: {
            departureDate: '2022-12-24,2023-06-19',
            oneWay: false,
            duration: '1,15',
            nonStop: false,
            viewBy: 'DESTINATION',
        },
    },
};

export const locationScoreFallback = [
    {
        sight: 97,
        restaurant: 80,
        shopping: 83,
        nightLife: 67,
        vegetarian: 61,
    },
    {
        sight: 99,
        restaurant: 82,
        shopping: 78,
        nightLife: 67,
        vegetarian: 55,
    },
    {
        sight: 78,
        restaurant: 82,
        shopping: 83,
        nightLife: 69,
        vegetarian: 0,
    },
].map(
    (x): CategoryRatedArea =>
        ({
            categoryScores: {
                nightLife: {
                    overall: x.nightLife,
                },
                restaurant: {
                    overall: x.restaurant,
                    vegetarian: x.vegetarian,
                },
                shopping: {
                    overall: x.shopping,
                    luxury: 0,
                },
                sight: {
                    overall: x.sight,
                    beachAndPark: 0,
                    historical: 0,
                },
            },
        } as CategoryRatedArea),
);

export const safePlaceFallback = [
    {
        lgbtq: 31,
        medical: 81,
        overall: 36,
        physicalHarm: 25,
        politicalFreedom: 34,
        theft: 22,
        women: 21,
    },
    {
        lgbtq: 28,
        medical: 65,
        overall: 36,
        physicalHarm: 27,
        politicalFreedom: 34,
        theft: 32,
        women: 30,
    },
    {
        lgbtq: 42,
        medical: 72,
        overall: 44,
        physicalHarm: 42,
        politicalFreedom: 27,
        theft: 39,
        women: 42,
    },
].map(
    (x): SafetyRateResponse => ({
        safetyScores: x,
    }),
);
