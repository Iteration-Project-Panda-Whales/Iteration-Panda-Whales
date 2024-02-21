const request = require('supertest');
const app = require('../server/server')
const axios = require('axios');
const fakeData = require('./fakeSpoonData.json');

jest.mock('axios');

const validAPIReq = '/api/search/mexican/20/10/37.7749/122.4194';
const invalidReqParams = '/api/search/mexican/20/10/37.7749';


describe('spoonAPI', () => {

    beforeAll(() => {
        axios.get.mockResolvedValue({
            data: fakeData, 
        })
    })


    describe('get spoonAPI route', () => {
        describe('given the request params are incomplete', () => {
            it('should return a message that with 500 status and err: "Incomplete Fields!"', async () => {
                const response = await request(app)
                .get(validAPIReq)
                .set('Accept', 'application/json');
                console.log(response);

                expect(response.status).toBe(500);
                expect(response.body).toHaveProperty('log', 'message');
                
            })
        })
    })
})