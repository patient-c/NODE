const users = [{
    id: 1,
    name: 'John Doe'
},
{
    id: 2,
    name: 'Jane Doe'
}
]

const getUserById = (id,cb) => {
    const user = users.find( (user) => user.id === id)

    if( !user ){
        return cb(`USUARIO no encontrado ${id}`)
    }
    return cb(null,user)
}

module.exports = {
    getUserById
}