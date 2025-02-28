import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataRival1 = createAsyncThunk(
    'getDataRival1',
    async function ( info, {dispatch}){    
        const response = await axios.get(info)
        const data = response.data.stats
        dispatch(getData1(data))
    }
)
export const getDataRival2 = createAsyncThunk(
    'getDataRival2',
    async function ( info, {dispatch}){
        console.log(info);
        
        const response = await axios.get(info)
        const data = response.data.stats
        dispatch(getData2(data))
    }
)

const buttleSlice = createSlice({
    name: 'buttleSlice',
    initialState: {
        pokemon1: {},
        pokemon2: {},
        winner: {},
        data1: [],
        data2: []
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
        },
        getData1: (state, action)=>{
            state.data1 = action.payload
        },
        getData2: (state, action)=>{
            state.data2 = action.payload
        }
    }
})

export const { addPokemon1, addPokemon2, beginButtle, getData1, getData2 } = buttleSlice.actions
export default buttleSlice.reducer