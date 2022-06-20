import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
// reducers
import userSlice from '../slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export type AppDispatch = typeof store.dispatch
// return all states types of store
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
