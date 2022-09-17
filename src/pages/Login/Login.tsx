import React, { useState } from 'react';

import { Input } from '@components/form/components';

const LoginPage = () => {
  const [errors, setErrors] = useState(null);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className='p-[20px] w-[300px] m-4 bg-white shadow-md shadow-[rgba(0, 0, 0, 0.25)]'>
        {errors && (
          <div className={`
            h-[80px] bg-[#DAC3FF] text-white flex justify-center items-center text-[15px]
            rounded-sm mb-[15px]
          `}>
            Username, password is invalid
          </div>
        )}

        <div className='mb-[15px]'>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => console.log(e.target.value)}
          />
        </div>
        <div className='mb-[15px]'>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => console.log(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className='h-[40px] w-full bg-[#AC80F3] rounded-sm text-white'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;