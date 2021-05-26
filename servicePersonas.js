const model = require('./modelPersonas')

function personasList() {
    return model.personasList();
}

function personasGet(id) {
    return model.personasGet(id)
}

function personasAdd(persona) {

}

function personasUpdate(persona) {

}

function personasRemove(id) {

}


module.exports = {
    personasList,
    personasGet,
    personasAdd,
    personasUpdate,
    personasRemove
}
