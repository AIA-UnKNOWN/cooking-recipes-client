import React from 'react';

import useHome from './home.hook';
import Header from '@components/layouts/Header';
import { Button } from '@components/elements';

const Home = props => {
  useHome();

  return (
    <div>
      <Header />
      <div className='flex justify-center items-center py-[25px]'>
        <Button>Add recipe</Button>        
      </div>
      
    </div>
  );
}

export default Home;