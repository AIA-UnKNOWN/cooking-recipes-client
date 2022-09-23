import { useEffect, useState } from 'react';
import useLoginServices from './login.services';

const useLogin = () => {
  const { login } = useLoginServices();
  const [errors, setErrors] = useState(null);
  const [form, setForm] = useState({});

  const loginUser = async (e) => {
    e.preventDefault();
    const { ok, response } = await login(form);
    if (!ok) return alert('Invalid username or password');
    alert('Successfully logged in');
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