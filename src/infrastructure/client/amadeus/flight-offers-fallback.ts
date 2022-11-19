/**
 * flight-destinatios is failing. This mock is to show the api concept if it keeps failing
 */
export const flightDestinationsFallback = {
    data: [
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'BLR',
            departureDate: '2023-03-23',
            returnDate: '2023-03-26',
            price: {
                total: '52.52',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=ALC&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=ALC&departureDate=2023-03-23&returnDate=2023-03-26&adults=1&nonStop=false',
            },
        },
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
            destination: 'BCN',
            departureDate: '2023-01-12',
            returnDate: '2023-01-17',
            price: {
                total: '98.53',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=MUC&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=MUC&departureDate=2023-01-12&returnDate=2023-01-17&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'TXL',
            departureDate: '2022-12-30',
            returnDate: '2023-01-06',
            price: {
                total: '108.30',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=WAW&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=WAW&departureDate=2022-12-30&returnDate=2023-01-06&adults=1&nonStop=false',
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
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'VIE',
            departureDate: '2022-12-31',
            returnDate: '2023-01-05',
            price: {
                total: '124.27',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=VIE&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=VIE&departureDate=2022-12-31&returnDate=2023-01-05&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'SFO',
            departureDate: '2023-03-25',
            returnDate: '2023-03-26',
            price: {
                total: '127.96',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=VCE&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=VCE&departureDate=2023-03-25&returnDate=2023-03-26&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'GOT',
            departureDate: '2023-01-02',
            returnDate: '2023-01-16',
            price: {
                total: '147.78',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=GOT&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=GOT&departureDate=2023-01-02&returnDate=2023-01-16&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'LWO',
            departureDate: '2022-12-30',
            returnDate: '2023-01-04',
            price: {
                total: '158.29',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=LWO&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=LWO&departureDate=2022-12-30&returnDate=2023-01-04&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'GLA',
            departureDate: '2023-02-01',
            returnDate: '2023-02-04',
            price: {
                total: '162.72',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=GLA&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=GLA&departureDate=2023-02-01&returnDate=2023-02-04&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'CLJ',
            departureDate: '2023-03-14',
            returnDate: '2023-03-22',
            price: {
                total: '163.16',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=CLJ&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=CLJ&departureDate=2023-03-14&returnDate=2023-03-22&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'RIX',
            departureDate: '2023-01-03',
            returnDate: '2023-01-10',
            price: {
                total: '167.72',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=RIX&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=RIX&departureDate=2023-01-03&returnDate=2023-01-10&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'TLL',
            departureDate: '2023-01-05',
            returnDate: '2023-01-11',
            price: {
                total: '167.75',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=TLL&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=TLL&departureDate=2023-01-05&returnDate=2023-01-11&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'MOW',
            departureDate: '2022-12-28',
            returnDate: '2023-01-03',
            price: {
                total: '176.63',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=MOW&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=MOW&departureDate=2022-12-28&returnDate=2023-01-03&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'KIV',
            departureDate: '2023-04-01',
            returnDate: '2023-04-16',
            price: {
                total: '220.51',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=KIV&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=KIV&departureDate=2023-04-01&returnDate=2023-04-16&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'BOS',
            departureDate: '2022-12-30',
            returnDate: '2023-01-14',
            price: {
                total: '289.78',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=BOS&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=BOS&departureDate=2022-12-30&returnDate=2023-01-14&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'MTY',
            departureDate: '2023-03-18',
            returnDate: '2023-03-19',
            price: {
                total: '326.09',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=MTY&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=MTY&departureDate=2023-03-18&returnDate=2023-03-19&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'FLL',
            departureDate: '2023-03-31',
            returnDate: '2023-04-01',
            price: {
                total: '359.01',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=FLL&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=FLL&departureDate=2023-03-31&returnDate=2023-04-01&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'DEN',
            departureDate: '2023-03-18',
            returnDate: '2023-03-19',
            price: {
                total: '386.82',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=DEN&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=DEN&departureDate=2023-03-18&returnDate=2023-03-19&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'ACC',
            departureDate: '2023-03-17',
            returnDate: '2023-03-27',
            price: {
                total: '428.52',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=ACC&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=ACC&departureDate=2023-03-17&returnDate=2023-03-27&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'ORL',
            departureDate: '2023-02-05',
            returnDate: '2023-02-06',
            price: {
                total: '433.09',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=ORL&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=ORL&departureDate=2023-02-05&returnDate=2023-02-06&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'TYO',
            departureDate: '2023-01-04',
            returnDate: '2023-01-10',
            price: {
                total: '456.05',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=TYO&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=TYO&departureDate=2023-01-04&returnDate=2023-01-10&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'SSA',
            departureDate: '2023-01-02',
            returnDate: '2023-01-03',
            price: {
                total: '459.73',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=SSA&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=SSA&departureDate=2023-01-02&returnDate=2023-01-03&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'MGA',
            departureDate: '2023-03-20',
            returnDate: '2023-03-27',
            price: {
                total: '484.84',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=MGA&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=MGA&departureDate=2023-03-20&returnDate=2023-03-27&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'SIN',
            departureDate: '2023-04-06',
            returnDate: '2023-04-10',
            price: {
                total: '521.21',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=SIN&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=SIN&departureDate=2023-04-06&returnDate=2023-04-10&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'CCS',
            departureDate: '2023-02-08',
            returnDate: '2023-02-15',
            price: {
                total: '528.17',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=CCS&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=CCS&departureDate=2023-02-08&returnDate=2023-02-15&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'SLC',
            departureDate: '2023-03-16',
            returnDate: '2023-03-17',
            price: {
                total: '550.01',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=SLC&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=SLC&departureDate=2023-03-16&returnDate=2023-03-17&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'SEA',
            departureDate: '2023-03-31',
            returnDate: '2023-04-01',
            price: {
                total: '590.64',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=SEA&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=SEA&departureDate=2023-03-31&returnDate=2023-04-01&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'RGN',
            departureDate: '2023-01-27',
            returnDate: '2023-01-30',
            price: {
                total: '628.70',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=RGN&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=RGN&departureDate=2023-01-27&returnDate=2023-01-30&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'KTM',
            departureDate: '2022-12-24',
            returnDate: '2022-12-27',
            price: {
                total: '629.07',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=KTM&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=KTM&departureDate=2022-12-24&returnDate=2022-12-27&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'MDZ',
            departureDate: '2022-12-24',
            returnDate: '2022-12-31',
            price: {
                total: '670.41',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=MDZ&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=MDZ&departureDate=2022-12-24&returnDate=2022-12-31&adults=1&nonStop=false',
            },
        },
        {
            type: 'flight-destination',
            origin: 'MAD',
            destination: 'HNL',
            departureDate: '2023-02-13',
            returnDate: '2023-02-18',
            price: {
                total: '1176.87',
            },
            links: {
                flightDates:
                    'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=MAD&destination=HNL&departureDate=2022-12-24,2023-06-19&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
                flightOffers:
                    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=HNL&departureDate=2023-02-13&returnDate=2023-02-18&adults=1&nonStop=false',
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
