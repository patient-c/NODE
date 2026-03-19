const {v4: uuidv4} = require('uuid')

const getUUId = () => uuidv4()

module.exports = {
    getUUId,
}
