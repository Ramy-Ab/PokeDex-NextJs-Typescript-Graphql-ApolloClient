import Axios from "axios"

export const pokeInstance = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})