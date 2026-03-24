//const { emailTemplate } = require("./js-foundation/01-template");
//require('./js-foundation/02-destructuring')
//const { getUserById } = require("./js-foundation/04-arrow");
// console.log(emailTemplate);

// 05 - const {getAge,getUUId} = require('./plugins')
// 05 - 
// 05 - const {buildMakePerson} = require('./js-foundation/05-factory')
// 05 - 
// 05 - const makePerson = buildMakePerson({getUUId,getAge}) 
// 05 - 
// 05 - const obj = { name:'Jhon',birthdate: '1998-10-31'}
// 05 - 
// 05 - const john = makePerson(obj)
// 05 - 
// 05 - console.log(john)

// const {getCharacterById} = require('./js-foundation/06-promises')
import { getCharacterById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger-plugin";
// 
const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Esto es algo malo')


getCharacterById(1)
.then((character) => console.log({character}))
.catch( (err) => console.error(err))
.finally(() => console.log('Finalmente'))

// getCharacterById(1)
// .then((character) => console.log({character}))
//     .catch( (err) => console.error(err))
//     .finally(() => console.log('Finalmente'))

// Token de acceso

// Publicas
