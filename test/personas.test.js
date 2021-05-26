const { assert } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http')

// DBs en testeos

chai.use(chaiHttp)
require('chai').should();

describe('Testeos de /api/personas', () => {
    
    let server;
    before(() => {
        server = require('../app')
    })

    after((done) => {
        server.close();
        done();
    });

    it('Listado de personas', async () => {
        const respuesta = await chai.request(server).get('/api/personas');
        respuesta.should.have.status(200)
        assert(respuesta.body.length, 4)
    })

    it('Obtener una persona', async () => {
        const respuesta = await chai.request(server).get('/api/personas/1');
        respuesta.should.have.status(200)
        assert(respuesta.body.id, 1)
        assert(respuesta.body.nombre, 'Orlando')
    })    
})