import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setRecipes } from "@reducers/recipes";
import useRecipesServices from "./recipes.services";

const useRecipes = props => {
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
    const recipes = await getAll(user?.id, cancelTokenSource);
    dispatch(setRecipes(recipes?.data));
  }

  return {
    /**
     * States
     */
    recipes,
  };
}

export default useRecipes;