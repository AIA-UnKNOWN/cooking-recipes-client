import axios, {
  AxiosResponse,
} from 'axios';

import { API_URL } from '@env';

const useRecipeServices = () => {
  
  const deleteRecipe = async (recipeId: number) : AxiosResponse<any> => {
    try {
      const response = await axios.delete(`${API_URL}/recipe/${recipeId}`);
      return response.data;
    } catch(error) {
      return error.response;
    }
  }

  return {
    deleteRecipe,
  }
}

export default useRecipeServices;