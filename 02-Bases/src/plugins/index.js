const {getUUId} = require('../plugins/get-id-plugin')
const {getAge} = require('../plugins/get-age-plugin')
const {httpClient} = require('./http-client-plugin')
const buildLogger = require('./logger-plugin')

module.exports = {
    getAge,
    getUUId,
    httpClient,
    buildLogger
}