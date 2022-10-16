import React from 'react';

import Recipe from './components/Recipe';
import useRecipes from './recipes.hook';

const Recipes = props => {
  const {
    recipes,
  } = useRecipes(props);

  return (
    <div className='flex flex-col items-center'>
      {recipes?.length > 0 ?
        recipes?.map(recipe => (
          <Recipe
            key={recipe.id}
            data={recipe}
          />
        )) : (
          <div className='h-[300px] bg-[#E9E9E9] w-full flex justify-center items-center'>
            <span>No recipes available.</span>
          </div>
        )
      }
    </div>
  );
}

export default Recipes;