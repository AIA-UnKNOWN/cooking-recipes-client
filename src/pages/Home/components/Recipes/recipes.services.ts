import axios, {
  AxiosPromise
} from 'axios';

import { API_URL } from '@env';

const useRecipesServices = () => {
  
  const getAll = async ({
    userId,
    data = {},
    cancelToken = null,
  } : {
    userId: number,
    data: any,
    cancelToken: any,
  }) : AxiosPromise<any> => {
    try {
      const response = await axios.post(`${API_URL}/recipe/all/${userId}`, data, { cancelToken });
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