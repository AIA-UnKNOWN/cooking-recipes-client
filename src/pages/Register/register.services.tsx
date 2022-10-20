import axios, {
  /* Axios Types */
  AxiosResponse
} from 'axios';

import { API_URL } from '@env';
import type { User } from '@reducers/user/user.types';

const useRegisterServices = () => {

  const register = async (user: User) : AxiosResponse<any> => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, user)
      return response.data;
    } catch(error) {
      return error.response;
    }
  }

  return {
    register,
  }
}

export default useRegisterServices;