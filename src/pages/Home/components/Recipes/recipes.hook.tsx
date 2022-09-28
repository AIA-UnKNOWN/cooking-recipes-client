import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useRecipesServices from "./recipes.services";

const useRecipes = props => {
  const [user] = useSelector(state => [state.user.data]);
  const { getAll } = useRecipesServices();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = async () => {
    const recipes = await getAll(user?.id);
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