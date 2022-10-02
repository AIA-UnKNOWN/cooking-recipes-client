import { useDispatch, useSelector } from "react-redux";

import { setRecipes } from "@reducers/recipes";
import useRecipeServices from "./recipe.services";
import type { Recipe } from "@reducers/recipes/recipe.types";

const useRecipe = props => {
  const dispatch = useDispatch();
  const [
    recipes,
  ] = useSelector(state => [
    state.recipes.data,
  ]);
  const { deleteRecipe } = useRecipeServices();

  const deleteRecipeById = async (recipeId: number) => {
    const response = await deleteRecipe(recipeId);
    response.data === 1 && removeRecipeFromRedux(recipeId);
  }

  const removeRecipeFromRedux = (recipeId: number) => {
    dispatch(
      setRecipes(
        recipes?.filter((recipe: Recipe) => recipe.id !== recipeId)
      )
    );
  }

  return {
    deleteRecipeById,
  }
}

export default useRecipe;