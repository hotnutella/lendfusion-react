import { rest } from 'msw';

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1, name: 'Mocked User 1',
                    username: 'mockeduser1',
                    email: 'mockeduser1@test.com',
                    address: {
                        street: 'Mocked Street 1',
                        suite: 'Mocked Suite 1',
                        city: 'Mocked City 1',
                        zipcode: 'Mocked Zipcode 1',
                        geo: {
                            lat: 'Mocked Lat 1',
                            lng: 'Mocked Lng 1',
                        }
                    },
                    phone: 'Mocked Phone 1',
                    website: 'Mocked Website 1',
                    company: {
                        name: 'Mocked Company 1',
                        catchPhrase: 'Mocked Catch Phrase 1',
                        bs: 'Mocked BS 1',
                    }
                },
                {
                    id: 2, name: 'Mocked User 2',
                    username: 'mockeduser2',
                    email: 'mockeduser2@test.com',
                    address: {
                        street: 'Mocked Street 2',
                        suite: 'Mocked Suite 2',
                        city: 'Mocked City 2',
                        zipcode: 'Mocked Zipcode 2',
                        geo: {
                            lat: 'Mocked Lat 2',
                            lng: 'Mocked Lng 2',
                        }
                    },
                    phone: 'Mocked Phone 2',
                    website: 'Mocked Website 2',
                    company: {
                        name: 'Mocked Company 2',
                        catchPhrase: 'Mocked Catch Phrase 2',
                        bs: 'Mocked BS 2',
                    }
                },
            ])
        );
    }),
    rest.get('https://jsonplaceholder.typicode.com/users/1', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                id: 1, name: 'Mocked User',
                username: 'mockeduser',
                email: 'mockeduser@test.com',
                address: {
                    street: 'Mocked Street',
                    suite: 'Mocked Suite',
                    city: 'Mocked City',
                    zipcode: 'Mocked Zipcode',
                    geo: {
                        lat: 'Mocked Lat',
                        lng: 'Mocked Lng',
                    }
                },
                phone: 'Mocked Phone',
                website: 'Mocked Website',
                company: {
                    name: 'Mocked Company',
                    catchPhrase: 'Mocked Catch Phrase',
                    bs: 'Mocked BS',
                }
            })
        );
    }),
];