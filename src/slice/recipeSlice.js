import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  fav: [],
  sort:'None',
  searchValue: "",
  cuisineSelect: "All",
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCuisineSelect: (state, action) => {
      state.cuisineSelect = action.payload;
    },
    setSort: (state,action) =>{
      state.sort = action.payload;
    },
    addToFav: (state, action) => {
      const recipeInFav = state.fav.find(
        (recipe) => recipe.id === action.payload
      );
      if (recipeInFav) {
        state.fav = state.fav.filter((recipe) => recipe.id !== action.payload);
      } else {
        state.fav.push(
          state.recipes.find((recipe) => recipe.id === action.payload)
        );
      }
    },

  },
});

export const {
  setRecipes,
  setSearchValue,
  setCuisineSelect,
  setSort,
  addToFav,
} = recipeSlice.actions;

export default recipeSlice.reducer;
