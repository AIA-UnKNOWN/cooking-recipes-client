import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import useRegisterServices from './register.services';

const useRegister = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register } = useRegisterServices();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  
  const handleInputChange = e => {
    const inputElement = e.target;
    setForm(form => ({
      ...form,
      [inputElement.name]: inputElement.value,
    }));
  }

  const signup = async e => {
    e.preventDefault();
    const hasNoErrors = validateInputs();
    if (!hasNoErrors) return;
    const { message } = await register(form);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
    goToLoginPage();
  }

  const validateInputs = () => {
    const formErrors = {};
    if (!form.email) formErrors.email = 'Email is required';
    if (!form.username) formErrors.username = 'Username is required';
    if (!form.password && !form['confirm-password']) formErrors.password = 'Password is required';
    if (form.password?.length < 8 || form['confirm-password']?.length < 8) formErrors.password = 'Password is too short';
    if (form.password !== form['confirm-password']) formErrors.password = "Password doesn't match";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  const goToLoginPage = () => {
    navigate('/signin');
  }

  return {
    // States
    errors,
    // Functions
    handleInputChange,
    signup,
    goToLoginPage,
  }
}

export default useRegister;