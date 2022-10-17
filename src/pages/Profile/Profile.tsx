import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { Button } from '@components/elements';
import {
  Input,
} from '@components/form/components';
import { setUser } from '@reducers/user';

const Profile = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ user ] = useSelector(state => [state.user.data]);

  const goBack = () => {
    navigate('/');
  }

  const logout = async () => {
    if (!Cookies.get('auth-token')) return;
    const logoutConfirmationPopup = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (logoutConfirmationPopup.isConfirmed) {
      Cookies.remove('auth-token');
      dispatch(setUser({}));
      Swal.fire(
        'Logged Out!',
        'You just logged out.',
        'error'
      );
    }
  }

  return (
    <div className='p-4'>
      <div className='mb-[22px] flex justify-end'>
        <Button
          onClick={goBack}
        >
          Back
        </Button>
      </div>
      <div>
        <div className='mb-[15px]'>
          <label className='text-center block mb-2'>
            Email
          </label>
          <Input
            className='text-center'
            placeholder="Email"
            name="email"
            onChange={() => null}
            value={user?.email || 'anonymous'}
          />
        </div>
        <div className='mb-[15px]'>
          <label className='text-center block mb-2'>
            Username
          </label>
          <Input
            className='text-center'
            placeholder="Username"
            name="username"
            onChange={() => null}
            value={user?.username || 'anonymous'}
          />
        </div>
      </div>
      <div className='mb-[22px] flex justify-center'>
        <Button
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Profile;