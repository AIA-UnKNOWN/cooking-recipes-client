import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '@components/elements';
import {
  Input,
} from '@components/form/components';

const Profile = props => {
  const navigate = useNavigate();
  const [ user ] = useSelector(state => [state.user.data]);

  const goBack = () => {
    navigate('/');
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
    </div>
  )
}

export default Profile;