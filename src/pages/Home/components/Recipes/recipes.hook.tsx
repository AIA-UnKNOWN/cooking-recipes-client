import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setRecipes } from "@reducers/recipes";
import useRecipesServices from "./recipes.services";

const useRecipes = props => {
  const {
    setPagination,
  } = props;
  const dispatch = useDispatch();
  const [
    user,
    recipes,
  ] = useSelector(state => [
    state.user.data,
    state.recipes.data,
  ]);
  const { getAll } = useRecipesServices();

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    getAllRecipes(cancelTokenSource.token);
    return () => {
      cancelTokenSource.cancel();
    }
  }, []);

  const getAllRecipes = async (cancelTokenSource) => {
    const recipes = await getAll({
      userId: user?.id,
      data: {
        pagination: {
          limit: 10,
        }
      },
      cancelTokenSource,
    });
    setPagination?.(recipes?.meta || {});
    dispatch(setRecipes(recipes?.data));
  }

  return {
    /**
     * States
     */
    recipes,
    /* Functions */
    
  };
}

export default useRecipes;