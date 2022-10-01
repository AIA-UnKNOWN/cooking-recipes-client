import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import useRecipesServices from "./recipes.services";

const useRecipes = props => {
  const [user] = useSelector(state => [state.user.data]);
  const { getAll } = useRecipesServices();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    getAllRecipes(cancelTokenSource.token);
    return () => {
      cancelTokenSource.cancel();
    }
  }, []);

  const getAllRecipes = async (cancelTokenSource) => {
    const recipes = await getAll(user?.id, cancelTokenSource);
    setRecipes(recipes?.data);
  }

  return {
    /**
     * States
     */
    recipes,
  };
}

export default useRecipes;