//const {getAge,getUUId} = require('../plugins')

interface BuildMakePersonOptions {
    getUUId: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({getUUId,getAge}: BuildMakePersonOptions) => {

    return ({name,birthdate}: PersonOptions) => {
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


//const obj = { name:'Jhon',birthdate: '1998-10-31'}
//
//const john = buildPerson(obj)
//
//console.log(john)