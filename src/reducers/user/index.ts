import { createSlice } from '@reduxjs/toolkit'
import type { UserInitialState } from './user.types';

const initialState: UserInitialState = {
  data: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, data: action.payload }
    },
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer