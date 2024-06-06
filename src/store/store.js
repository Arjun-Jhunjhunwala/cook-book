import {configureStore} from '@reduxjs/toolkit'
import recipeReducer from '../slice/recipeSlice'

export const Store = configureStore({
    reducer: {
        recipes: recipeReducer,
    }
})