import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import useAddRecipePageServices from "./addRecipePage.services";

const useAddRecipePage = props => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.data);
  const { createRecipe } = useAddRecipePageServices();

  const goBack = () => {
    navigate('/');
  }

  const addRecipe = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', user?.id);
    const formElement = e.target;
    const inputFields = formElement.querySelectorAll('input, textarea');
    inputFields?.forEach(inputField => {
      const value = getValueByType({ element: inputField, type: inputField.type });
      formData.append(inputField.name, value);
    });
    createRecipe(formData);
    navigate('/');
  }

  const getValueByType = ({ element, type }) => {
    switch(type) {
      case 'file':
        return element.files[0];
      default:
        return element.value;
    }
  }

  return {
    /* Functions */
    goBack,
    addRecipe,
  };
}

export default useAddRecipePage;