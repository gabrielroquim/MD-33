const req = require('supertest');
const API_URL = process.env.API_URL

describe('User Login', () => {
    it('SQL Injection', async () => {
        await req(API_URL)
            .post('/#/login')
            .send({
                "email": "'",
                "password": "' or 1=1 --"
            })
            
            .set("Accept", "application/json")
            .then(response =>{
                expect(response.statusCode).toEqual(422)
            })
    });

    it('SQL Injection Administrador', async () => {
        await req(API_URL)
            .post('/#/administration')
            .send({
                "email": "admin@juice-sh.op",
                "password": " "
            })
            
            .set("Accept", "application/json")
            .then(response =>{
                expect(response.statusCode).toEqual(422)
            })
    });
});