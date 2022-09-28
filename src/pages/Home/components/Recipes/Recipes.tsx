import React from 'react';

import Recipe from './components/Recipe';
import useRecipes from './recipes.hook';

const Recipes = props => {
  const {
    recipes,
  } = useRecipes();

  return (
    <div className='flex flex-col items-center'>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id}
          data={recipe}
        />
      ))}
    </div>
  );
}

export default Recipes;