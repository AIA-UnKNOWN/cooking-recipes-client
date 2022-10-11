import React from 'react';

import useHome from './home.hook';
import { Button } from '@components/elements';
import Header from '@components/layouts/Header';
import Recipes from './components/Recipes';

const Home = props => {
  const {
    onClickAddRecipe,
  } = useHome();

  return (
    <div>
      <Header />
      <div className='flex justify-center items-center py-[25px]'>
        <Button
          icon={
            <img
              className='scale-75'
              src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-plus-user-interface-tanah-basah-detailed-outline-tanah-basah-2.png"
            />
          }
          onClick={onClickAddRecipe}
          className="w-fit pr-3"
        >
          Add recipe
        </Button>        
      </div>
      <Recipes />
    </div>
  );
}

export default Home;