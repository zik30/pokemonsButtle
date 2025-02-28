import { createSlice } from "@reduxjs/toolkit";




const collectionSlice = createSlice({
    name: 'collectionSlice',
    initialState: {
        pokemons: []
    },
    reducers: {
        addPokemon: ( state, action ) =>{
            state.pokemons = [
                ...state.pokemons,
                action.payload
            ]
        },
        removePokemon: ( state, action ) =>{
            state.pokemons = state.pokemons.filter(pokemon => pokemon.name !== action.payload)
        }
    }
})

export const { addPokemon, removePokemon } = collectionSlice.actions
export default collectionSlice.reducer