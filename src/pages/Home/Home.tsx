import React from 'react';

import useHome from './home.hook';
import { Button } from '@components/elements';
import Header from '@components/layouts/Header';
import Recipes from './components/Recipes';

const Home = props => {
  useHome();

  return (
    <div>
      <Header />
      <div className='flex justify-center items-center py-[25px]'>
        <Button>Add recipe</Button>        
      </div>
      <Recipes />
    </div>
  );
}

export default Home;