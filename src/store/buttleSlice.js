import { createSlice } from "@reduxjs/toolkit";



const buttleSlice = createSlice({
    name: 'buttleSlice',
    initialState: {
        pokemon1: {},
        pokemon2: {},
        winner: {}
    },
    reducers:{
        addPokemon1:( state, action) => {
            state.pokemon1  = action.payload
        },
        addPokemon2: ( state, action ) =>{
            state.pokemon2 = action.payload
        },
        beginButtle: ( state, action ) =>{
            state.winner = action.payload
        }
    }
})

export const { addPokemon1, addPokemon2, beginButtle } = buttleSlice.actions
export default buttleSlice.reducer