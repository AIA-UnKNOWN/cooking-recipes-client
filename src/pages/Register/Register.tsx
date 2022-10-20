import React from 'react';

import { Input } from '@components/form/components';
import useRegister from './register.hook';

const Register = props => {
  const {
    // States
    errors,
    // Functions
    handleInputChange,
    signup,
    goToLoginPage,
  } = useRegister(props);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        className='p-[20px] w-[300px] m-4 bg-white shadow-md shadow-[rgba(0, 0, 0, 0.25)]'
        onSubmit={signup}
      >
        {Object.keys(errors).length > 0 && (
          <div className={`
            min-h-[80px] bg-[#DAC3FF] text-white flex justify-center items-center text-[15px]
            rounded-sm mb-[15px] flex-col
          `}>
            {Object.keys(errors).map(key => (
              <span key={key}>{errors[key]}</span>
            ))}
          </div>
        )}
        <div className='mb-[15px]'>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-[15px]'>
          <Input
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-[15px]'>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-[15px]'>
          <Input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className='h-[40px] w-full bg-[#AC80F3] rounded-sm text-white'
          >
            Register
          </button>
          <p className='text-[12px] mt-3 text-center'>
            Already have an account? <button className='text-[#4C6EE4]' onClick={goToLoginPage}>Signin here</button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;