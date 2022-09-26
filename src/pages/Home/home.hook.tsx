import { useNavigate } from "react-router-dom";

const useHome = () => {
  const navigate = useNavigate();

  const onClickAddRecipe = () => {
    navigate('/recipe/add');
  }
  
  return {
    onClickAddRecipe,
  }
}

export default useHome;