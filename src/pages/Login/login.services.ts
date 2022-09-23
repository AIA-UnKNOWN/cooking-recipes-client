import axios, {
  /* Axios Types */
  AxiosResponse
} from 'axios';

import { API_URL } from '@env';

const useLoginServices = () => {

  const login = async (user) : AxiosResponse<any> => {
    try {
      const { status, ok, data: reponse } = await axios.post(`${API_URL}/auth/signin`, user)
      return { status, ok, reponse };
    } catch(error) {
      return error;
    }
  }

  return {
    login,
  }
}

export default useLoginServices;