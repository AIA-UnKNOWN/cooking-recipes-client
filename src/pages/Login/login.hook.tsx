import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import useLoginServices from './login.services';
import { setUser } from '@reducers/user';
import { User } from '@reducers/user/user.types';

const useLogin = () => {
  const {
    login,
    loginWithToken,
  } = useLoginServices();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    loginWithAuthToken();
  }, []);

  const loginWithAuthToken = async () => {
    const { statusText, message, data: user } = Cookies.get('auth-token') && await loginWithToken(Cookies.get('auth-token'));
    saveUser(user);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
    navigate('/');
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const { statusText, message, data: user } = await login(form);
    if (statusText?.toLowerCase() === 'unauthorized') return alert('Invalid username or password');
    saveUser(user);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
    navigate('/');
  }

  const saveUser = (user: User) => {
    dispatch(setUser(user));
    saveAuthToken(user?.token);
  }

  const saveAuthToken = (token: string) : void => {
    Cookies.set('auth-token', token);
  }

  const handleInputChange = e => {
    const inputElement = e.target;
    setForm(form => ({
      ...form,
      [inputElement.name]: inputElement.value,
    }));
  }

  const goToSignupPage = () => {
    navigate('/signup');
  }
  
  return {
    /* States */
    errors, setErrors,
    /* Functions */
    loginUser,
    handleInputChange,
    goToSignupPage,
  }
}

export default useLogin;