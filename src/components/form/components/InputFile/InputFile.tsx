import React from 'react';

import { Input } from '@components/form/components';

const InputFile = props => {
  const id = "crc-input-file";
  
  return (
    <div
      className={`
        border-2 border-[#E9E9E9] rounded-sm text-[#939393]
        ${props.className}
      `}
    >
      <label
        className={`h-[100px] flex justify-center items-center text-[#939393]`}
        htmlFor={id}
      >
        {props.label || 'Upload File'}
      </label>
      <Input
        id={id}
        type="file"
        {...props}
        className='hidden'
      />
    </div>
  );
}

export default InputFile;