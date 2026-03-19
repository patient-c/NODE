const axios = require('axios')

const httpClientPlugin = {
 get: async (url) => {
    try{
        const {data} = await axios.get(url) // De la respuesta desestructuro data
        return data
    }catch(err){
        console.error(err)
    }
    
 },
}

module.exports = {
    httpClient: httpClientPlugin,
}