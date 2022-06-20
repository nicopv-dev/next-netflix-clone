import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

export type UserState = {
  name: number
  email: string
  image: string
  isAuth: boolean
}

// initial state
const initialState: UserState = {
  name: '',
  email: '',
  image: '',
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUserState: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.image = action.payload.image
      state.isAuth = true
    },
  },
})

export const { initUserState } = userSlice.actions

export const selectUser = (state: RootState) => state.user

// exporting the reducer here, as we need to add this to the store
export default userSlice.reducer
