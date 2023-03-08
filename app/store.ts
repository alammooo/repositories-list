import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import seederReducer from "@/features/seeder/seederSlice"

export const store = configureStore({
  reducer: {
    seeder: seederReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
