import React from 'react';

const Input = props => {
  return (
    <input
      {...props}
      className={`
        h-[40px] bg-[#E9E9E9] text-[15px] px-4 rounded-sm
        w-full focus:outline focus:outline-[#DAC3FF] focus:outline-[3px]
        ${props.className}
      `}
    />
  );
}

export default Input;