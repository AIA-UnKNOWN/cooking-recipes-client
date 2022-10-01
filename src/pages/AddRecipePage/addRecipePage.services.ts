import axios, {
  AxiosResponse,
} from 'axios';

import { API_URL } from '@env';

const useAddRecipePageServices = () => {

  const createRecipe = async (data) : AxiosResponse<any> => {
    try {
      const response = await axios.post(`${API_URL}/recipe/create`, data);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return error.response;
    }
  }

  return {
    createRecipe,
  };
}

export default useAddRecipePageServices;