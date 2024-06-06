export const getRecipeByRating = (recipes, rate) => {
    const filteredByRating = recipes.filter(recipe => recipe.rating >= rate);
    return filteredByRating;
} 