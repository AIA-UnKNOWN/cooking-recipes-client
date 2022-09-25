import React from 'react';

import Recipe from './components/Recipe';

const Recipes = props => {

  return (
    <div className='flex flex-col items-center'>
      {new Array(10).fill('ha').map((item, i) => (
        <Recipe
          key={i}
          
        />
      ))}
    </div>
  );
}

export default Recipes;