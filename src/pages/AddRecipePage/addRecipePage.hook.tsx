import { useNavigate } from "react-router-dom";

const useAddRecipePage = props => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }

  return {
    goBack,
  };
}

export default useAddRecipePage;