import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Search from '@components/features/Search';

const Header = props => {
  const {
    onChangeSearch,
  } = props;
  const navigate = useNavigate();
  const user = useSelector(state => state.user.data);

  return (
    <div className='flex justify-evenly items-center h-[50px] shadow-sm shadow-[rgba(0,0,0,.25)]'>
      <div
        className='h-[35px] w-[35px] flex justify-center items-center rounded-full hover:bg-[#E9E9E9]'
        onClick={() => navigate('/profile')}
      >
        <img
          className="scale-75"
          src="https://img.icons8.com/ios-glyphs/30/ac80f3/user.png"
        />
      </div>
      <Search onChange={onChangeSearch} />
      <div className='hidden'>{user.email || 'guest@email.com'}</div>
    </div>
  );
}

export default Header;