import axios from 'axios'
import { setRecipes } from '../slice/recipeSlice';

export const getRecipes = () => async dispatch => {
const url = "https://dummyjson.com/recipes/?limit=0"

    try{
        const {data: {recipes}} = await axios.get(url);
        dispatch(setRecipes(recipes));
    }catch(err){
        return err;
    }
    
}

export const sortRecipes = (sortBy, order) => async dispatch => {
    const BaseURL = 'https://dummyjson.com'

    try{
        const {data: {recipes}} = await axios.get(BaseURL+'/recipes',{
            params:{
                sortBy: sortBy,
                order: order,
                limit:0
            }
        })
        dispatch(setRecipes(recipes));
    }catch(err){
        return err
    }
    
}