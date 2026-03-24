import axios from 'axios'

export const httpClient = {
 get: async (url: string ) => {
    try{
        const {data} = await axios.get(url) // De la respuesta desestructuro data
        return data
    }catch(err){
        console.error(err)
    }
    
 },
 post: async(url: string,body: any) => {},
 put: async(url: string,body: any) => {},
 delete: async(url: string) => {},
}