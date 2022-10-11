import React from 'react';

const Button = props => {
  const {
    children,
    className,
    onClick,
    icon,
  } = props;

  return (
    <button
      className={`bg-[#AC80F3] text-white w-[110px] h-[40px] text-[14px]
        rounded-sm flex justify-center items-center ${className ?? ""}
      `}
      onClick={onClick}
    >
      {icon && (
        <div className='flex w-fit mr-2'>
          {icon}
        </div>
      )}
      <div>
        {children}
      </div>
    </button>
  );
}

export default Button;