import { createSlice } from '@reduxjs/toolkit'
import type { RecipesInitialState } from './recipe.types';

const initialState: RecipesInitialState = {
  data: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      return { ...state, data: action.payload }
    },
  }
})

export const { setRecipes } = recipesSlice.actions
export default recipesSlice.reducer