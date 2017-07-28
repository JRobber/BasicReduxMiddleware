import axios from 'axios'

//export vanillaJS function (state = [initialState], action)
export default function(state, action){
    //Switch statement
    //returns next state
    switch(action.type){
        case "GET_POKEMON_PENDING":
            console.log("pending")
        break;
        case "GET_POKEMON_FULFILLED":
            console.log("fullfilled", action.payload) //value from the pokemon api
        break;
        case "GET_POKEMON_REJECTED":

        break;
        case POKEMONBYID+"_REJECTED":
        case POKEMONBYID+"_FULFILLED":
        case levelUpPokemon:
        case battlePokemon:
    }
    return state;
}

const POKEMONBYID = "GET_POKEMON_BY_ID"

export function updateColor(color){
    return {
        type: "UPDATE_COLOR",
        color
    }
}

export function getPokemon(){
    console.log("building pokemon")
    return {
        type: "GET_POKEMON",
        payload: axios.get('http://pokeapi.co/api/v2/pokemon/1')
        //http://pokeapi.co/api/v2/
    }
}

export function getPokemonById(id){
     return {
        type: POKEMONBYID,
        payload: axios.get('http://pokeapi.co/api/v2/pokemon/' + id)
        //http://pokeapi.co/api/v2/
    }
}
