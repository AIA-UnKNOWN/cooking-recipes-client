import axios, {
  AxiosResponse,
} from 'axios';

import { API_URL } from '@env';
import type {
  Recipe
} from '@reducers/recipes/recipe.types';

const useRecipeServices = () => {
  
  const deleteRecipe = async (recipeId: number) : AxiosResponse<any> => {
    try {
      const response = await axios.delete(`${API_URL}/recipe/${recipeId}`);
      return response.data;
    } catch(error) {
      return error.response;
    }
  }

  const updateRecipe = async (recipeId: number, updatedRecipe: Recipe) : AxiosResponse<any> => {
    try {
      const response = await axios.put(`${API_URL}/recipe/${recipeId}/update`, {
        updatedRecipe
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }

  return {
    deleteRecipe,
    updateRecipe,
  }
}

export default useRecipeServices;