import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import useLoginServices from './login.services';
import { setUser } from '@reducers/user';

const useLogin = () => {
  const { login } = useLoginServices();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const [form, setForm] = useState({});

  const loginUser = async (e) => {
    e.preventDefault();
    const { statusText, message, data: user } = await login(form);
    if (statusText?.toLowerCase() === 'unauthorized') return alert('Invalid username or password');
    dispatch(setUser(user));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
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