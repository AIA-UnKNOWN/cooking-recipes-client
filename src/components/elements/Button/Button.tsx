import React from 'react';

const Button = props => {
  const {
    children,
    className,
    onClick,
  } = props;

  return (
    <button
      className={`bg-[#AC80F3] text-white w-[110px] h-[30px] text-[10px]
        rounded-sm
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;