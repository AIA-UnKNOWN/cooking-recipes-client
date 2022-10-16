import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import useRecipesServices from "@pages/Home/components/Recipes/recipes.services";
import { setRecipes } from "@reducers/recipes";

const useHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAll } = useRecipesServices();
  const [
    user,
  ] = useSelector(state => [
    state.user.data,
  ]);
  const [paginationMeta, setPaginationMeta] = useState({});

  const onClickAddRecipe = () => {
    navigate('/recipe/add');
  }

  const getAllRecipesWithPagination = async meta => {
    console.log('getAllRecipesWithpagination', meta)
    const recipes = await getAll({
      userId: user?.id,
      data: {
        pagination: {
          offset: meta?.offset || undefined,
          limit: 10,
        },
      },
    });
    setPaginationMeta?.(recipes?.meta || {});
    dispatch(setRecipes(recipes?.data));
  }
  
  return {
    // States
    paginationMeta,
    // Functions
    setPaginationMeta,
    onClickAddRecipe,
    getAllRecipesWithPagination,
  }
}

export default useHome;