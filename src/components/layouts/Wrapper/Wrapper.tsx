import React, { ReactNode } from 'react';

const Wrapper: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {

  return (
    <div className={`lg:w-[1400px] m-auto ${className}`}>
      {children}
    </div>
  );
}

export default Wrapper;