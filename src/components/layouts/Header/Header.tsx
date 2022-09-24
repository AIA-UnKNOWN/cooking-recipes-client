import React from 'react';
import { useSelector } from 'react-redux';

import Search from '@components/features/Search';

const Header = props => {
  const user = useSelector(state => state.user.data);

  return (
    <div className='flex justify-center items-center h-[50px] shadow-sm shadow-[rgba(0,0,0,.25)]'>
      <div className='hidden'></div>
      <Search />
      <div className='hidden'>{user.email || 'guest@email.com'}</div>
    </div>
  );
}

export default Header;