const {httpClient} = require('../plugins')

const getCharacterById = async (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    return await httpClient.get( url )
}

module.exports = {
    getCharacterById,
}

