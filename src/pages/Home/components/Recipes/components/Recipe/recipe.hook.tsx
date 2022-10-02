import useRecipeServices from "./recipe.services";

const useRecipe = props => {
  const { deleteRecipe } = useRecipeServices();

  const deleteRecipeById = async (recipeId: number) => {
    const response = await deleteRecipe(recipeId);
    response.data === 1 && console.log('deleted successfully')
  }

  return {
    deleteRecipeById,
  }
}

export default useRecipe;