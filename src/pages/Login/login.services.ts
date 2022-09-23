import axios, {
  /* Axios Types */
  AxiosResponse
} from 'axios';

import { API_URL } from '@env';
import type { User } from '@reducers/user/user.types';

const useLoginServices = () => {

  const login = async (user: User) : AxiosResponse<any> => {
    try {
      const response = await axios.post(`${API_URL}/auth/signin`, user)
      return response.data;
    } catch(error) {
      return error.response;
    }
  }

  return {
    login,
  }
}

export default useLoginServices;