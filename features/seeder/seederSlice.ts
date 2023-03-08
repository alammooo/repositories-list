import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "@/app/store"

export interface RepoSlice {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: RepoSlice = {
  value: 0,
  status: "idle",
}

export const fetchRepo = createAsyncThunk("seeder/fetchRepo", async () => {
  const response = await fetch(
    "https://api.github.com/users/sandhikagalih/repos?per_page=10&sort=updated"
  )
  return response.json()
})

export const seederSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepo.fulfilled, (state, action) => {
        state.value = action.payload.userId
      })
      .addCase(fetchRepo.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(fetchRepo.pending, (state) => {
        state.status = "loading"
      })
  },
})

export const selectCount = (state: RootState) => state.seeder.value

export default seederSlice.reducer
