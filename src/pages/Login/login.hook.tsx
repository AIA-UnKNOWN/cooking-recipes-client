import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import useLoginServices from './login.services';
import { setUser } from '@reducers/user';

const useLogin = () => {
  const { login } = useLoginServices();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [form, setForm] = useState({});

  const loginUser = async (e) => {
    e.preventDefault();
    const { statusText, message, data: user } = await login(form);
    if (statusText?.toLowerCase() === 'unauthorized') return alert('Invalid username or password');
    dispatch(setUser(user));
    saveAuthToken(user?.token);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
    navigate('/');
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
  
  return {
    /* States */
    errors, setErrors,
    /* Functions */
    loginUser,
    handleInputChange,
  }
}

export default useLogin;