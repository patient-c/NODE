import {httpClient} from '../plugins/http-client-plugin'

export const getCharacterById = async (id: string|number):Promise<string> => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    return await httpClient.get( url )
}


