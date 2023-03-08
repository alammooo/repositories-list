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

export const fetchRepo = createAsyncThunk(
  "seeder/fetchRepo",
  async (username: string) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=12&sort=updated`,
      {
        method: "GET",
        headers: {
          Authorization: `11AYVMQLQ0KyKRfkqk6NkE_y0EpJwbtPCrIZUa2fvKCamEJiTzVVcBSOe2edO3O74SL4OHOAFM523J1Wcs`,
        },
      }
    )
    return response.json()
  }
)

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
