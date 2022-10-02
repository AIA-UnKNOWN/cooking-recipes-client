export type Recipe = {
  id: number;
  name: string;
  description: string;
  is_favorite: boolean;
  user_id: number;
}

export type RecipesInitialState = {
  data: Array<Recipe> | [];
} 