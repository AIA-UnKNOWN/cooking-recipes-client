import axios, {
  AxiosPromise
} from 'axios';

import { API_URL } from '@env';

const useRecipesServices = () => {
  
  const getAll = async (userId: number) : AxiosPromise<any> => {
    try {
      const response = await axios.get(`${API_URL}/recipe/all/${userId}`);
      return response.data;
    } catch (error) {
      return error.response;
    }
  }

  return {
    getAll,
  };
}

export default useRecipesServices;