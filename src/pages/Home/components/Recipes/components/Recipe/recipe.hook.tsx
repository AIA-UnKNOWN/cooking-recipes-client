import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';

import { setRecipes } from "@reducers/recipes";
import useRecipeServices from "./recipe.services";
import type { Recipe } from "@reducers/recipes/recipe.types";

const useRecipe = props => {
  const dispatch = useDispatch();
  const [
    recipes,
  ] = useSelector(state => [
    state.recipes.data,
  ]);
  const { deleteRecipe, updateRecipe } = useRecipeServices();
  const [isPlayVideo, setIsPlayVideo] = useState(false);

  const deleteRecipeById = async (recipeId: number) => {
    const deleteConfirmationPopup = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (deleteConfirmationPopup.isConfirmed) {
      const response = await deleteRecipe(recipeId);
      response.data === 1 && removeRecipeFromRedux(recipeId);
      Swal.fire(
        'Deleted!',
        'Recipe has been deleted.',
        'success'
      );
    }
  }

  const removeRecipeFromRedux = (recipeId: number) => {
    dispatch(
      setRecipes(
        recipes?.filter((recipe: Recipe) => recipe.id !== recipeId)
      )
    );
  }

  const downloadRecipeVideo = ({ url, type, fileName }) => {
    const dataBlob = new Blob([url], { type });
    const href = URL.createObjectURL(dataBlob);
    const a = Object.assign(document.createElement('a'), {
      href,
      style: 'display: none',
      download: fileName.replace(/ /g, '_'),
    });
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(href);
    a.remove();
  }

  const updateRecipeById = async (id: number, updatedRecipe: Recipe) => {
    const { data, isUpdated } = await updateRecipe(id, updatedRecipe);
    isUpdated && updateRecipeRedux(id, data);
  }

  const updateRecipeRedux = (recipeId: number, updatedRecipe: Recipe) => {
    dispatch(
      setRecipes(
        recipes?.map((recipe: Recipe) => recipe.id === recipeId ? { ...recipe, ...updatedRecipe} : recipe)
      )
    );
  }

  return {
    /* States */
    isPlayVideo, setIsPlayVideo,
    /* Functions */
    deleteRecipeById,
    downloadRecipeVideo,
    updateRecipeById,
  }
}

export default useRecipe;