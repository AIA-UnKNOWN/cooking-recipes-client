import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import type { Recipe } from "@reducers/recipes/recipe.types";
import useAddRecipePageServices from "./addRecipePage.services";
import { setRecipes } from "@reducers/recipes";

const useAddRecipePage = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [
    user,
    recipes,
  ] = useSelector(state => [
    state.user.data,
    state.recipes.data,
  ]);
  const { createRecipe } = useAddRecipePageServices();

  const goBack = () => {
    navigate('/');
  }

  const onSumbitRecipe = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', user?.id);
    const formElement = e.target;
    const inputFields = formElement.querySelectorAll('input, textarea');
    inputFields?.forEach(inputField => {
      const value = getValueByType({ element: inputField, type: inputField.type });
      formData.append(inputField.name, value);
    });
    const { data } = await createRecipe(formData);
    appendRecipe(data);
    navigate('/');
  }

  const appendRecipe = (recipe: Recipe) => {
    dispatch(setRecipes([...recipes, recipe]));
  }

  const getValueByType = ({ element, type }) => {
    switch(type) {
      case 'file':
        return element.files[0];
      default:
        return element.value;
    }
  }

  const displayFileOnUpload = async (e) => {
    const file = e.target.files[0];
    const videoFilePattern = /^(video)/i;
    const imageFilePattern = /^(image)/i;
    if (file && videoFilePattern.test(file.type)) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const data = fileReader.result;
        Object.assign(
          document.getElementById('recipe-video'),
          {
            className: 'w-full block',
            src: data,
          }
        );
      }
    } else if (file && imageFilePattern.test(file.type)) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const data = fileReader.result;
        Object.assign(
          document.getElementById('recipe-thumbnail'),
          {
            className: 'w-full block',
            src: data,
          }
        );
      }
    }
  }

  return {
    /* Functions */
    goBack,
    onSumbitRecipe,
    displayFileOnUpload,
  };
}

export default useAddRecipePage;