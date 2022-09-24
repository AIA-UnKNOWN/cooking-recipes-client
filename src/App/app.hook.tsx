import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { User } from '@reducers/user/user.types';

const useApp = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.data);

  useEffect(() => {
    checkIfAuthenticated();
  }, [user]);

  const checkIfAuthenticated = () : void => {
    if (hasUserData(user)) {
      navigate('/');
    } else {
      navigate('/signin');
    }
  }

  const hasUserData = (user: User) : boolean => Object.keys(user).length > 0;

  return {}
}

export default useApp;