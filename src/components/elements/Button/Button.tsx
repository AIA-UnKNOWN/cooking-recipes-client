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
        rounded-sm ${className ?? ""}
      `}
      onClick={onClick}
    >
      {icon && (
        <span className='mr-3'>
          <i className={icon} aria-hidden="true"></i>
        </span>
      )}
      {children}
    </button>
  );
}

export default Button;