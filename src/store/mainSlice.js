import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPokemons = createAsyncThunk(
    'getAllPokemons',
    async function ( info, {dispatch}){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200')
        const data = response.data.results        
        dispatch(pokemonsData(data))
    }
)


const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        pokemons: []
    },
    reducers: {
        pokemonsData: (state, action)=>{
            state.pokemons = action.payload
        }
    }
})

export const { pokemonsData} = mainSlice.actions
export default mainSlice.reducer