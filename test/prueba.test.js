const chai = require('chai')
const chaiHttp = require('chai-http')

// DBs en testeos

chai.use(chaiHttp)
require('chai').should();

describe('Testeos de /prueba', () => {
    
    let server;
    before(() => {
        server = require('../app')
    })

    after((done) => {
        server.close();
        done();
    });

    it('Prueba 01 de /prueba', async () => {
        const respuesta = await chai.request(server).get('/prueba');
        respuesta.should.have.status(200)
    })
})