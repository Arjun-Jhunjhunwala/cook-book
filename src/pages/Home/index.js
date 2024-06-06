import Navbar from "../../components/Navbar";
import { getRecipes } from "../../api/recipes";
import RecipeCard from "../../components/recipeCard";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getRecipeBySearch } from "../../utils/getRecipeBySearch";
import { getRecipeByCuisine } from "../../utils/getRecipeByCuisine";

export const Home = () => {

    const dispatch = useDispatch();
    
    const {recipes, searchValue, cuisineSelect} = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(getRecipes());
        
    },[])

    
    const filteredBySearch = (searchValue?.length > 0)? getRecipeBySearch(recipes, searchValue):recipes;
    const filteredByCuisine = (cuisineSelect!=='All')? getRecipeByCuisine(filteredBySearch,cuisineSelect):filteredBySearch;
    

    return(
        <>
        <Navbar />
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "start", rowGap : "15px", columnGap:"15px", marginTop: 100, marginLeft: 8, paddingBottom: "10"}}>
        {
            filteredByCuisine.map(recipe => <RecipeCard recipe={recipe}></RecipeCard>)
        }
        </div>
        </>
    )
}
