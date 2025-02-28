import { configureStore } from "@reduxjs/toolkit"
import mainReducer  from "./mainSlice"
import collectionReducer  from "./collectionSlice"
import buttleReducer from "./buttleSlice"

export const store = configureStore({
    reducer: {
        mainReducer,
        collection: collectionReducer,
        buttle: buttleReducer
    }
})