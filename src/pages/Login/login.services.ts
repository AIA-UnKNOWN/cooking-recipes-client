import axios, {
  /* Axios Types */
  AxiosResponse
} from 'axios';
import Cookies from 'js-cookie';

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

  const loginWithToken = async (authToken: string) : AxiosResponse<any> => {
    try {
      const response = await axios.post(`${API_URL}/auth/signin`, {}, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        }
      });
      return response.data;
    } catch(error) {
      Cookies.remove('auth-token');
      return error.response;
    }
  }

  return {
    login,
    loginWithToken,
  }
}

export default useLoginServices;