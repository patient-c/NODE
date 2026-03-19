//const {getAge,getUUId} = require('../plugins')

const buildMakePerson = ({getUUId,getAge}) => {

    return buildPerson = ({name,birthdate}) => {
    return {
        id: getUUId(),
        name: name,
        age: getAge(birthdate),
    }
}
}

//const buildPerson = ({name,birthdate}) => {
//    return {
//        id: getUUId(),
//        name: name,
//        age: getAge(birthdate),
//    }
//}

module.exports = {
    buildMakePerson,
}


//const obj = { name:'Jhon',birthdate: '1998-10-31'}
//
//const john = buildPerson(obj)
//
//console.log(john)