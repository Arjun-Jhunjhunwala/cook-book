export const getRecipeBySearch = (recipes, searchText) => {
    const filteredBySearch = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchText));
    return filteredBySearch;
}