export const getRecipeByCuisine = (recipes, cuisine) => {
    const filteredByCuisine = recipes.filter(recipe => recipe.cuisine === cuisine);
    return filteredByCuisine;
}